import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { MapController } from './controllers/map.controller';
import { MapService } from './services/map.service';
import { MapEntity } from './models/map.entity';

@Module({
  controllers: [MapController],
  providers: [MapService],
  imports: [
    TypeOrmModule.forFeature([
      MapEntity
    ]),
  ],
  exports: [MapService]
})
export class MapModule {
}
