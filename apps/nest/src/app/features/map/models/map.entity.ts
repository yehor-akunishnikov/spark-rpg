import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MapEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({unique: true})
  name: string;

  @Column('text', {array: true, default: []})
  gameTerritory: string[];
}
