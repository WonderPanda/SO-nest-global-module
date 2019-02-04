import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { FeatureModule } from './feature/feature.module';

@Module({
  imports: [ConfigModule, FeatureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
