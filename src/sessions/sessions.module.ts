import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { SessionsService } from './sessions.service';
import { Film } from 'src/films/films.model';
import { Seat } from 'src/seats/seats.model';
import { Booking } from 'src/booking/booking.model';
import { Session } from './sessions.model';
import { SessionsController } from './sessions.controller';

@Module({
  imports: [
    SequelizeModule.forFeature([Session, Film, Seat, Booking]),
  ],
  controllers: [SessionsController],
  providers: [SessionsService],
})
export class SessionsModule {}