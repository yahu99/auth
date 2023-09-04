import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { constants } from '../constants';
import { UserDto } from '../dto/user.dto';
import { IUsersService } from '../interfaces/services/user.interface';

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async whoAmI(token: string): Promise<UserDto> {
    const { userId } = await this.jwtService.verifyAsync(token, {
      secret: constants.jwt_secret,
    });

    const user = await this.usersRepository.findOne({
      where: { id: userId },
    });

    return UserDto.fromEntityShort(user);
  }

  async findOne(email: string): Promise<UserDto> {
    const user = await this.usersRepository.findOne({ where: { email } });

    return user && UserDto.fromEntity(user);
  }
}
