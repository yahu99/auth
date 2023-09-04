import { AuthType } from '../../types/auth.type';

export interface IAuthService {
  signIn(data: AuthType): Promise<{
    access_token: string;
  }>;
}
