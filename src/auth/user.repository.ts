import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { RegisterCredentialsDto } from './dto/register-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(registerCredentialsDto: RegisterCredentialsDto): Promise<void> {
        const { username, password, type, email } = registerCredentialsDto;

        const user = new User();
        user.username = username;
        user.password = password;
        user.email = email;
        user.type = type;

        try {
            await user.save();
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('Email already exists');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<string> {
        const {email, password} = authCredentialsDto;
        const user = await this.findOne({email});

        if (user && await user.validatePassword(password)) {
            return user.email;
        }

        return null;
    }
}
