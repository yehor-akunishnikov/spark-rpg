import { CHARACTER_CLASSES, CHARACTER_RACES, CharacterStats } from '@spark-rpg/shared-models';

import {
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Max,
  Min
} from 'class-validator';
import { Expose, Type } from 'class-transformer';

export class CreateCharacterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsObject()
  @IsNotEmptyObject()
  @Type(() => CreateCharacterStatsDto)
  stats: CharacterStats;

  @IsEnum(CHARACTER_CLASSES)
  class: CHARACTER_CLASSES;

  @IsEnum(CHARACTER_RACES)
  race: CHARACTER_RACES;

  @IsString()
  @IsNotEmpty()
  biography: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  icon?: string;
}

export class CreateCharacterStatsDto {
  @IsNumber() @IsNotEmpty() @Min(0) @Max(10) strength: number;

  @IsNumber() @IsNotEmpty() @Min(0) @Max(10) charisma: number;

  @IsNumber() @IsNotEmpty() @Min(0) @Max(10) endurance: number;

  @IsNumber() @IsNotEmpty() @Min(0) @Max(10) intelligence: number;

  @IsNumber() @IsNotEmpty() @Min(0) @Max(10) agility: number;

  @IsNumber() @IsNotEmpty() @Min(0) @Max(10) perception: number;

  @IsNumber() @IsNotEmpty() @Min(0) @Max(10) luck: number;
}

export class CharacterResponseDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Type(() => StatsResponseDto)
  @Expose()
  stats: CharacterStats;

  @Expose()
  class: CHARACTER_CLASSES;

  @Expose()
  race: CHARACTER_RACES;

  @Expose()
  biography: string;

  @Expose()
  icon?: string;
}

export class StatsResponseDto {
  @Expose() strength: number;

  @Expose() charisma: number;

  @Expose() endurance: number;

  @Expose() intelligence: number;

  @Expose() agility: number;

  @Expose() perception: number;

  @Expose() luck: number;
}
