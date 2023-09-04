import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../../domain/services/auth.service';
import { AuthType } from '../../domain/types/auth.type';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  signIn(@Body() data: AuthType): Promise<{
    access_token: string;
  }> {
    return this.authService.signIn(data);
  }
}
