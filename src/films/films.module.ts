import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { Film } from './films.model';
import { FilmsController, ImagesController } from './films.controller';
import { FilmsService } from './films.service';
import { Booking } from 'src/booking/booking.model';
import { Seat } from 'src/seats/seats.model';
import { Session } from 'src/sessions/sessions.model';

@Module({
  controllers: [FilmsController, ImagesController],
  providers: [FilmsService],
  imports: [SequelizeModule.forFeature([Film, Booking, Seat, Session])],
})
export class FilmsModule {}
