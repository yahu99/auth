import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../../domain/services/users.service';
import { Token } from '../../domain/decorators/token.decorator';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('whoAmI')
  getUser(@Token() token: string) {
    return this.usersService.whoAmI(token);
  }
}
