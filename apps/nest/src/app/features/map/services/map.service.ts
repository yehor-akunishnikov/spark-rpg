import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';

import { CreateMapRequestDto, UpdateMapRequestDto } from '../dto/map.dto';
import { MapEntity } from '../models/map.entity';

@Injectable()
export class MapService {
  constructor(
    @InjectRepository(MapEntity) private mapRepository: Repository<MapEntity>,
  ) {
  }

  public async findAll(): Promise<MapEntity[]> {
    return this.mapRepository.find();
  }

  public async findOne(id: string): Promise<MapEntity> {
    return this.mapRepository.findOneOrFail({where: {id}});
  }

  public async create(createMapRequestDto: CreateMapRequestDto): Promise<MapEntity> {
    const map = this.mapRepository.create(createMapRequestDto);

    await this.mapRepository.insert(map);

    return map;
  }

  public async update(id: string, updateMapRequestDto: UpdateMapRequestDto): Promise<MapEntity> {
    return (await this.mapRepository.update({id}, updateMapRequestDto)).raw[0];
  }

  public async delete(id: string): Promise<void> {
    await this.mapRepository.delete({id});
  }
}
