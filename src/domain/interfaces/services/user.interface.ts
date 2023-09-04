import { UserDto } from '../../dto/user.dto';

export interface IUsersService {
  whoAmI(token: string): Promise<UserDto>;
  findOne(email: string): Promise<UserDto>;
}
