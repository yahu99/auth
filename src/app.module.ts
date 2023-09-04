import { Module } from '@nestjs/common';
import { AuthModule } from './infrastructure/auth/auth.module';
import { UsersModule } from './infrastructure/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './domain/entities/user.entity';
import { constants } from './domain/constants';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: constants.dbConfig.host,
      port: constants.dbConfig.port,
      username: constants.dbConfig.username,
      password: constants.dbConfig.password,
      database: constants.dbConfig.database,
      entities: [Users],
      synchronize: constants.dbConfig.synchronize,
    }),
  ],
})
export class AppModule {}
