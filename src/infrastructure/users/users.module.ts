import { Module } from '@nestjs/common';
import { UsersController } from '../../application/controllers/users.controller';
import { UsersService } from '../../domain/services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../../domain/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
