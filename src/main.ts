import { NestFactory } from '@nestjs/core';
import config from './config';
import { PORT } from './constants/port';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  // Create a Nest application
  const app = await NestFactory.create(AppModule);
  // Apply global configurations
  await config(app);
  // Start the application
  await app.listen(PORT);
}
bootstrap();
