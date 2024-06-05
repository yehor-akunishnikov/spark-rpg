import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { MAP_NAMES, MapMetadataLocation } from '@spark-rpg/shared-models';

@Entity()
export class MapEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('enum', {unique: true, enum: MAP_NAMES, nullable: true})
  name: MAP_NAMES;

  @Column('text', {array: true, default: []})
  gameTerritory: string[];

  @Column('json')
  locations: MapMetadataLocation[];
}
