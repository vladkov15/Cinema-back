import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Booking } from '../booking/booking.model';
import { Seat } from './seats.model';
import { Session } from 'src/sessions/sessions.model';
import { SeatController } from './seats.controller';
import { SeatService } from './seats.service';


@Module({
  imports: [
    SequelizeModule.forFeature([Seat, Booking, Session]),
  ],
  controllers: [SeatController],
  providers: [SeatService],
  exports: [SequelizeModule],
})
export class SeatModule {}