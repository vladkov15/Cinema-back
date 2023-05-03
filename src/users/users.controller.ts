import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.model';

export interface UserLogin{
  email: string,
  password: string
}

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() user: any): Promise<User> {
    return this.usersService.createUser(user);
  }

  @Get()
  async getAll(){
    return this.usersService.getAllUsers()
  }

  @Get(':email')
  async findOne(@Param('email') id: string): Promise<User> {
    return this.usersService.getUserByEmail(id);
  }
  @Post('/auth')
  async getUser(@Body() user: UserLogin): Promise<User>{
    return this.usersService.getUser(user)
  }

  @Patch(':email')
  async setNewPassword(@Body() user: User): Promise<User>{
    return this.usersService.updateUser(user)
  }
}
