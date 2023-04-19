import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';
import { Booking } from 'src/booking/booking.model';
import { Seat } from 'src/seats/seats.model';
import { Ticket } from './tickets.model';

@Module({
  imports: [SequelizeModule.forFeature([Ticket, Booking, Seat])],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
