import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import { EmailModule } from './email/email.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PagesModule } from './page/page.module';

@Module({
	imports: [
		RenderModule,
		MongooseModule.forRootAsync({
			useFactory: () => ({
				uri: process.env.MONGO_URL,
				useNewUrlParser: true,
			}),
		}),
		EmailModule,
		PagesModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
