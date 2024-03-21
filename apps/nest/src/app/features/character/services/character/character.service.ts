import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

import { DataSource, DeleteResult, Repository } from 'typeorm';

import { Character } from '@spark-rpg/shared-models';

import { CharacterEntity } from '../../models/character.entity';
import { UserEntity } from '../../../user/models/user.entity';
import { CreateCharacterDto } from '../../dto/character.dto';

@Injectable()
export class CharacterService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(CharacterEntity) private characterRepository: Repository<CharacterEntity>,
  ) {
  }

  public async findAll(userId: string): Promise<Character[]> {
    return this.dataSource.createQueryBuilder()
      .relation(UserEntity, 'characters')
      .of(userId)
      .loadMany();
  }

  public async create(userId: string, createCharacterDto: CreateCharacterDto): Promise<Character> {
    const character = this.characterRepository.create({...createCharacterDto, creator: userId});

    await this.characterRepository.insert(character);

    return character;
  }

  public delete(id: string): Promise<DeleteResult> {
    return this.characterRepository.delete(id);
  }
}
