import { ArrayNotEmpty, IsArray, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class CreateMapRequestDto {
  @IsString()
  name: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({each: true})
  gameTerritory: string[];
}

export class MapResponseDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  gameTerritory: string[];
}
