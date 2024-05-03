export interface User {
  id?: string;
  username: string;
  password?: string;
  role?: USER_ROLES;
}

export type UserProfile = Pick<User, 'username'>;
export type UserMe = Pick<User, 'username' | 'role'>;

export enum USER_ROLES {
  PLAYER = 'Player',
  DM = 'DM',
  SUPER_USER = 'Super User',
}
