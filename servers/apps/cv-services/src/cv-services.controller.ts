import { Controller, Get } from '@nestjs/common';
import { CvServicesService } from './cv-services.service';

@Controller()
export class CvServicesController {
  constructor(private readonly cvServicesService: CvServicesService) {}

  @Get()
  getHello(): string {
    return this.cvServicesService.getHello();
  }
}
