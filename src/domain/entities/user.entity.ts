import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
import { IUsersEntity } from '../interfaces/entities/users.interface';

@Entity({ name: 'users' })
export class Users implements IUsersEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;
}
