import { Module } from '@nestjs/common';
import { CvServicesController } from './cv-services.controller';
import { CvServicesService } from './cv-services.service';

@Module({
  imports: [],
  controllers: [CvServicesController],
  providers: [CvServicesService],
})
export class CvServicesModule {}
