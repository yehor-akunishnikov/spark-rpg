import {Character} from './character.models';

export interface User {
  username: string;
  password?: string;
  role: USER_ROLES;
  characters: Character[];
}

export enum USER_ROLES {
  PLAYER = 'Player',
  DM = 'DM',
  SUPER_USER = 'Super User',
}
