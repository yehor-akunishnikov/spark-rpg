import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Req, UseGuards } from '@nestjs/common';

import { plainToInstance } from 'class-transformer';
import { Request } from 'express';

import { Character, User } from '@spark-rpg/shared-models';

import { CharacterResponseDto, CreateCharacterDto } from '../../dto/character.dto';
import { CharacterService } from '../../services/character/character.service';
import { JwtAuthGuard } from '../../../auth/guards/jwt-auth.guard';

@Controller('character')
export class CharacterController {
  constructor(
    private characterService: CharacterService,
  ) {
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  public async getAll(@Req() request: Request<{ user: User }>): Promise<Character[]> {
    const userId = (request.user as User).id;
    const characters = await this.characterService.findAll(userId);

    return plainToInstance(CharacterResponseDto, characters);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  public async create(@Req() request: Request<{
    user: User
  }>, @Body() createCharacterDto: CreateCharacterDto): Promise<Character> {
    const userId = (request.user as User).id;
    const character = await this.characterService.create(userId, createCharacterDto);

    return plainToInstance(CharacterResponseDto, character);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  public async delete(@Param('id') id: string): Promise<void> {
    await this.characterService.delete(id);

    return;
  }
}
