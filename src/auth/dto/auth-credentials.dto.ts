import { IsString, MinLength, MaxLength, Matches, IsEmail, IsIn, IsNumberString } from 'class-validator';
import { UserTypes } from '../user-type.enum';

export class AuthCredentialsDto {
    @IsEmail()
    email: string;

    @IsNumberString()
    @IsIn([UserTypes.CLIENT, UserTypes.HAND])
    type: number;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        { message: 'password to week'},
    )
    password: string;
}
