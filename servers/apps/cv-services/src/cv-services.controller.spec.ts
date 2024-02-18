import { Test, TestingModule } from '@nestjs/testing';
import { CvServicesController } from './cv-services.controller';
import { CvServicesService } from './cv-services.service';

describe('CvServicesController', () => {
  let cvServicesController: CvServicesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CvServicesController],
      providers: [CvServicesService],
    }).compile();

    cvServicesController = app.get<CvServicesController>(CvServicesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cvServicesController.getHello()).toBe('Hello World!');
    });
  });
});
