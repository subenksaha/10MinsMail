import { SMTPServer } from 'smtp-server';
import { MailParser } from 'mailparser';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SmtpService {
	private readonly smtpPort: number;
	private readonly server: SMTPServer;
	private readonly domains: string[];
	private readonly parser: MailParser;

	constructor(@InjectModel('Email') private readonly emailModel) {
		this.smtpPort = parseInt(process.env.SMTP_PORT, 10);
		this.domains = process.env.DOMAINS.split(',');
		this.parser =  new MailParser();

		this.parser.on('headers', headers => {
			console.log(headers);
		});

		this.parser.on('data', data => {
			switch (data.type) {
				case 'attachment':
					console.log(data.filename);
					data.content.pipe(process.stdout);
					data.content.on('end', () => data.release());
					break;
				case 'text':
					console.log(data.html);
					break;
			}
		});

		this.server = new SMTPServer({
			logger: process.env.NODE_ENV !== 'production' ? true : false,
			authOptional: true,
			disabledCommands: ['AUTH'],
			maxClients: 10,

			onConnect(session, callback) {
				Logger.debug('SMTP Connect from ' + session.remoteAddress);
				return callback(); // Accept the connection
			},

			onMailFrom(address, session, callback) {
				Logger.debug('SMTP MAIL FROM: ' + address.address);
				return callback();
			},

			onRcptTo(address, session, callback) {
				Logger.debug('SMTP RCPT TO: ' + address.address);
				const domainPart = address.address.split('@').pop().toLowerCase();
				if (this.domains.indexOf(domainPart) >= 0 ) {
					// allowed
					return callback();
				} else {
					// not allowed
					return callback(new Error(`Only the domains ${this.domains.join(',')} are allowed to receive mail`));
				}
			},

			onData(stream, session, callback) {
				Logger.debug('Data Stream Started');
				this.parser(stream);
			},
		});
	}

}
