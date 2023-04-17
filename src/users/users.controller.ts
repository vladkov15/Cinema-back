import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() userDto: CreateUserDTO) {
    return this.usersService.createUser(userDto);
  }

  @Get()
  getAll(){
    return this.usersService.getAllUsers()
  }
}
