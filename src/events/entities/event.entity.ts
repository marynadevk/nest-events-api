import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  eventDate: Date;

  @Column()
  address: string;

  @ManyToOne(() => User, (user) => user.organized)
  @JoinColumn()
  organizer: User;
}
