import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { MapMetadata } from '@spark-rpg/shared-models';

import { CreateMapRequestDto, MapResponseDto } from '../dto/map.dto';
import { MapService } from '../services/map.service';
import { plainToInstance } from 'class-transformer';

@Controller('map')
export class MapController {
  constructor(
    private mapService: MapService
  ) {
  }

  @Get()
  public async getAll(): Promise<MapMetadata[]> {
    const maps = await this.mapService.findAll();

    return plainToInstance(MapResponseDto, maps);
  }

  @Get(':id')
  public async getOne(@Param('id') id: string): Promise<MapMetadata> {
    const map = await this.mapService.findOne(id);

    return plainToInstance(MapResponseDto, map);
  }

  @Post()
  public async create(@Body() createMapRequestDto: CreateMapRequestDto): Promise<MapMetadata> {
    const map = await this.mapService.create(createMapRequestDto);

    return plainToInstance(MapResponseDto, map);
  }
}
