import { IsNotEmpty, IsString } from 'class-validator';

import { Expose } from 'class-transformer';

import { USER_ROLES } from '@spark-rpg/shared-models';

export class CreateUserRequestDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

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
