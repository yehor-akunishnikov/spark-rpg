import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { USER_ROLES } from '@spark-rpg/shared-models';

import { CharacterEntity } from '../../character/models/character.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({unique: true})
  username: string;

  @Column()
  password?: string;

  @Column({
    type: 'enum',
    enum: USER_ROLES,
    default: USER_ROLES.PLAYER
  })
  role?: USER_ROLES;

  @OneToMany(() => CharacterEntity, (characterEntity) => characterEntity.creator, {
    cascade: true,
  })
  characters: CharacterEntity[];
}
