import { Module } from '@nestjs/common';
import { AuthService } from '../../domain/services/auth.service';
import { AuthController } from '../../application/controllers/auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { constants } from '../../domain/constants';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: constants.jwt_secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
