import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	@Render('Home')
	viewHome() {
		const domains = process.env.DOMAINS.split(',');

		return {
			title: 'hello',
			domains,
		};
	}
}
