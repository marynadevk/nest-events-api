import { IsEmail, Length } from 'class-validator';
import { UserDoesNotExist } from '../validators/user-does-not-exist.constraint';
import { IsRepeated } from '../validators/is-repeated.constraint';

export class CreateUserDto {
  @Length(5)
  @UserDoesNotExist()
  username: string;

  @Length(8)
  password: string;

  @Length(8)
  @IsRepeated('password')
  retypedPassword: string;

  @Length(2)
  firstName: string;

  @Length(2)
  lastName: string;

  @IsEmail()
  @UserDoesNotExist()
  email: string;
}
