import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Booking } from 'src/booking/booking.model';
import { Ticket } from 'src/tickets/tickets.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Booking, Ticket])
  ]
})
export class UsersModule {}
