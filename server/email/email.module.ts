import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import EmailSchema from './schemas/email.schema';
import { SmtpService } from './services/smtp.service';

@Module({
	imports: [ MongooseModule.forFeature([{ name: 'Email', schema: EmailSchema }]) ],
	providers: [ SmtpService ]
})
export class EmailModule {}
