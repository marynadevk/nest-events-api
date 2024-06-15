import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.save(
      new User({
        ...createUserDto,
        password: bcrypt.hash(createUserDto.password, 10),
      }),
    );
  }

  public async findUserById(id: number): Promise<User | undefined> {
    return await this.userRepository.findOne({
      where: { id },
    });
  }

  public async findUserByUsername(username: string): Promise<User | undefined> {
    return await this.userRepository.findOne({
      where: { username },
    });
  }
}
