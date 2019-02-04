import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';
import { FeatureService } from './feature/feature.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
    private readonly featureService: FeatureService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
