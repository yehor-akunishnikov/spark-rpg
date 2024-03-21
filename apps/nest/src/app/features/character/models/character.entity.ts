import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { CHARACTER_CLASSES, CHARACTER_RACES, CharacterStats } from '@spark-rpg/shared-models';

import { UserEntity } from '../../user/models/user.entity';

@Entity()
export class CharacterEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.characters, {
    onDelete: 'CASCADE',
  })
  creator: string;

  @Column()
  name: string;

  @Column({
    type: 'json',
    default: {
      strength: 0,
      charisma: 0,
      endurance: 0,
      intelligence: 0,
      agility: 0,
      perception: 0,
      luck: 0
    },
  })
  stats: CharacterStats;

  @Column({
    type: 'enum',
    enum: CHARACTER_CLASSES,
    default: CHARACTER_CLASSES.WARRIOR
  })
  class: CHARACTER_CLASSES;

  @Column({
    type: 'enum',
    enum: CHARACTER_RACES,
    default: CHARACTER_RACES.HUMAN
  })
  race: CHARACTER_RACES;

  @Column()
  biography: string;

  @Column({
    nullable: true
  })
  icon?: string;
}
