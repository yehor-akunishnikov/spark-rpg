import { Expose } from 'class-transformer';

import { USER_ROLES } from '@spark-rpg/shared-models';

export class UserProfileResponseDto {
  @Expose()
  username: string;
}

export class UserMeResponseDto {
  @Expose()
  username: string;

  @Expose()
  role: USER_ROLES;
}
