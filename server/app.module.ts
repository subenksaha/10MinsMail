import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PagesModule } from './pages/pages.module';

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
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
