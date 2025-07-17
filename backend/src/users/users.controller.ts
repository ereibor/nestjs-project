import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  @Get()
  getUser() {
    const usersService = new UsersService();
    return usersService.getUsers();
  }
}
