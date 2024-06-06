import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';

import { MapMetadata } from '@spark-rpg/shared-models';

import { CreateMapRequestDto, MapResponseDto } from '../dto/map.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { MapService } from '../services/map.service';
import { plainToInstance } from 'class-transformer';

@Controller('map')
export class MapController {
  constructor(
    private mapService: MapService
  ) {
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  public async getAll(): Promise<MapMetadata[]> {
    const maps = await this.mapService.findAll();

    return plainToInstance(MapResponseDto, maps);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  public async getOne(@Param('id') id: string): Promise<MapMetadata> {
    const map = await this.mapService.findOne(id);

    return plainToInstance(MapResponseDto, map);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  public async create(@Body() createMapRequestDto: CreateMapRequestDto): Promise<MapMetadata> {
    const map = await this.mapService.create(createMapRequestDto);

    return plainToInstance(MapResponseDto, map);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<void> {
    return this.mapService.delete(id);
  }
}
