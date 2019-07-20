import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Next from 'next';
import { RenderModule } from 'nest-next';
import { config as dotConfig } from 'dotenv';

import nextI18NextMiddleware from 'next-i18next/middleware';
import nextI18next from '../i18n';

import * as NextConfig from '../next.config';

async function bootstrap() {
	await dotConfig();

	const dev = process.env.NODE_ENV !== 'production';
	const app = Next({ dev, conf: NextConfig });

	await app.prepare();

	const server = await NestFactory.create(AppModule);
	server.use(nextI18NextMiddleware(nextI18next));

	const renderer = server.get(RenderModule);
	renderer.register(server, app);

	await server.listen(80);
}
bootstrap();
