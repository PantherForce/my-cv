import { NestFactory } from '@nestjs/core';
import { CvServicesModule } from './cv-services.module';

async function bootstrap() {
  const app = await NestFactory.create(CvServicesModule);
  await app.listen(3000);
}
bootstrap();
