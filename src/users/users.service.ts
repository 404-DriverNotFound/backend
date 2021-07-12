import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(nickname: string, updateUserDto: UpdateUserDto) {
    return `This action updates user's ${nickname}`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
