import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { normalizePort, onListening } from './main.utils';

const httpPort = normalizePort(process.env.PORT || 3000);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // TODO: test this
  // app.useGlobalPipes(new ValidationPipe());

  await app.listen(httpPort);
  app.getHttpServer().on('listening', onListening);
}
bootstrap();
