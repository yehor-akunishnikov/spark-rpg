import { Expose } from 'class-transformer';

import { USER_ROLES, UserMe, UserProfile } from '@spark-rpg/shared-models';

export class UserProfileResponseDto implements UserProfile {
  @Expose()
  username: string;
}

export class UserMeResponseDto implements UserMe {
  @Expose()
  username: string;

  @Expose()
  role: USER_ROLES;
}
