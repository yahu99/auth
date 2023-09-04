import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { verify } from 'jsonwebtoken';
import { constants } from '../constants';
const checkToken = (token: string): boolean => {
  try {
    return !!verify(token, constants.jwt_secret);
  } catch (e) {
    return false;
  }
};
export const Token = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): string => {
    const request = ctx.switchToHttp().getRequest();
    const token = request.headers?.authorization?.split(' ')?.[1];

    if (!token || !checkToken(token))
      throw new UnauthorizedException(`Provide token please`);

    return token;
  },
);
