import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { USER_ROLES } from '@spark-rpg/shared-models';

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
}
