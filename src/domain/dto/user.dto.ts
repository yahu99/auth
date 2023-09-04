import { Users } from '../entities/user.entity';

export class UserDto {
  id: number;
  email: string;
  password: string;

  static fromEntity(entity: Users): UserDto {
    const it = new UserDto();

    it.id = entity.id;
    it.email = entity.email;
    it.password = entity.password;

    return it;
  }

  static fromEntityShort(entity: Users): UserDto {
    const it = new UserDto();

    it.id = entity.id;
    it.email = entity.email;

    return it;
  }
}
