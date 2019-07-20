import { Controller, Get, Render } from '@nestjs/common';
import { PageService } from './page.service';

@Controller('')
export class PageController {
	constructor(private readonly appService: PageService) {}

	@Get('/privacy')
	@Render('Privacy')
	viewPrivacy() {
		return {
			title: 'Privacy',
		};
	}

	@Get('/contact')
	@Render('Contact')
	viewContact() {
		return {
			title: 'Contact',
		};
	}
	
	@Get('/')
	@Render('Home')
	viewHome() {
		const domains = process.env.DOMAINS.split(',');

		return {
			title: 'hello',
			domains,
		};
	}
}
