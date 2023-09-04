import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { constants } from './domain/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(constants.port); // @TODO move it to congig
}
bootstrap();
