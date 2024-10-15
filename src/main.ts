import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger, RequestMethod } from '@nestjs/common';
import 'reflect-metadata';
import { version } from '../package.json';
import config from './config/global.config';
const globalConfig = config();
async function bootstrap() {
    const logger = new Logger('bootstrap');
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: globalConfig.cors,
        methods: 'GET ,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    app.setGlobalPrefix('api', {
        exclude: [{ path: 'diag/healthcheck', method: RequestMethod.GET }],
    });
    if (globalConfig.environment !== 'production') {
        const config = new DocumentBuilder()
            .setTitle('Invoice API')
            .setVersion(version)
            .build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('api/swagger', app, document);
    }
    await app.listen(globalConfig.port);
    logger.log(`Environment: ${globalConfig.environment}`);
    logger.log(`Application listening on port ${globalConfig.port}`);
}
bootstrap();