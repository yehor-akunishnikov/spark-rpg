import { IsNotEmpty, IsString } from 'class-validator';

import { Expose } from 'class-transformer';

export class CreateUserDto {
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
