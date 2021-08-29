import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';


async function start() {

  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  await app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
}

start();
