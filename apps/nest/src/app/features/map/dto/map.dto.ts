import { ArrayNotEmpty, IsArray, IsEnum, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Expose, Type } from 'class-transformer';

import { LOCATION_NAMES, MAP_NAMES, MapMetadata, MapMetadataLocation } from '@spark-rpg/shared-models';

class MapMetadataLocationRequestDto implements MapMetadataLocation {
  @IsString()
  @IsNotEmpty()
  @IsEnum(LOCATION_NAMES)
  name: LOCATION_NAMES;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsString()
  @IsNotEmpty()
  illustration: string;
}

export class CreateMapRequestDto implements MapMetadata {
  @IsString()
  @IsNotEmpty()
  @IsEnum(MAP_NAMES)
  name: MAP_NAMES;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({each: true})
  gameTerritory: string[];

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({each: true})
  @Type(() => MapMetadataLocationRequestDto)
  locations: MapMetadataLocation[];
}

export class MapResponseDto implements MapMetadata {
  @Expose()
  id: string;

  @Expose()
  name: MAP_NAMES;

  @Expose()
  gameTerritory: string[];

  @Expose()
  @Type(() => MapMetadataLocationResponseDto)
  locations: MapMetadataLocation[];
}

export class MapMetadataLocationResponseDto implements MapMetadataLocation {
  @Expose()
  name: LOCATION_NAMES;

  @Expose()
  position: string;

  @Expose()
  illustration: string;
}
