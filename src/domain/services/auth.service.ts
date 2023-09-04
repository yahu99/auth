import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthType } from '../types/auth.type';
import { IAuthService } from '../interfaces/services/auth.interface';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(data: AuthType): Promise<{
    access_token: string;
  }> {
    const user = await this.usersService.findOne(data.username);

    if (user?.password !== data.password || !user) {
      throw new UnauthorizedException();
    }

    return {
      access_token: await this.jwtService.signAsync({
        userId: user.id,
      }),
    };
  }
}
