import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class LoginRequestDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class LoginResponseDto {
  @Expose()
  token: string;
}
