import { User } from './user.models';

export type LoginPayload = Pick<User, 'username' | 'password'>;
export type RegisterPayload = Pick<User, 'username' | 'password'>;

export interface LoginResponse {
  token: string;
}
