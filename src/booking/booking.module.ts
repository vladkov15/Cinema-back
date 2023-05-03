import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Seat } from 'src/seats/seats.model';
import { Ticket } from 'src/tickets/tickets.model';
import { User } from 'src/users/user.model';
import { BookingController } from './booking.controller';
import { Booking } from './booking.model';
import { BookingService } from './booking.service';
import { Session } from 'src/sessions/sessions.model';

@Module({
  controllers: [BookingController],
  providers: [BookingService],
  imports: [SequelizeModule.forFeature([Booking, Seat, Session, Ticket, User])],
})
export class BookingsModule {
  constructor(private readonly service: BookingService) {
    setInterval(async () => {
      await this.service.deleteOldBookings();
      console.log('удаление неоплаченный билетов');
    }, 300000);
}}
