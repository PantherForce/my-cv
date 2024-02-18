import { Injectable } from '@nestjs/common';

@Injectable()
export class CvServicesService {
  getHello(): string {
    return 'Hello World!';
  }
}
