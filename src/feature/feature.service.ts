import { Injectable } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class FeatureService {
  constructor(private readonly configService: ConfigService) {}
}
