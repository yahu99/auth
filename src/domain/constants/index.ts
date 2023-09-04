import { Users } from '../entities/user.entity';

export const constants = {
  jwt_secret: 'MTKFOWkWWyjB9yYpcyMSp7ON3eByr8a6',
  port: 3000,
  dbConfig: {
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'postgres',
    synchronize: true,
  },
};
