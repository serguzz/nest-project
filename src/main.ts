import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function start() {

  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  //creating documentation of the API using Swagger package
  const config = new DocumentBuilder()
      .setTitle('Backend API Building')
      .setDescription('Documentation of Backend API')
      .setVersion('1.0.0')
      .addTag('ULBI TV')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  
  
  await app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

  
}

start();
