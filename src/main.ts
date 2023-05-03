import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import cors from 'cors'

async function start() {
  const PORT = process.env.PORT || 5000;
  const expressApp = new ExpressAdapter();
  const app = await NestFactory.create(AppModule, expressApp);
  const corsOptions = {
    origin: 'http://localhost:3000',
    allowedHeaders: 'Content-Type,Authorization',
    methods: 'GET,PUT,POST,DELETE,OPTIONS,PATCH'
  };
  app.use(require('cors')(corsOptions)); 
 
  await app.listen(PORT, () => {
    console.log(`Started on ${PORT}`);
   
  });
 
}

start();
