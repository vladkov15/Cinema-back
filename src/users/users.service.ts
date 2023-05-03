import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserLogin } from './users.controller';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(createuser: any): Promise<User>{
    const user = await this.userRepository.create(createuser);
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({include :{all: true}});
    return users
  }

  async getUserByEmail(data: string) {
    const user = await this.userRepository.findOne({where : {email: data }});
    return user
  }
  async getUser(data: UserLogin) {
    const user = await this.userRepository.findOne({where : {email: data.email,
    password: data.password }});
    return user
  }
  async updateUser(data: User): Promise<User> {
    const user = await this.userRepository.findByPk(data.id);
    if (!user) {
      throw new Error(`User with id not found`);
    }
    await user.update(data);
    return user;
  }
 
}
