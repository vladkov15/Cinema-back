import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/user.model';
import { FilmsModule } from './films/films.module';
import { Film } from './films/films.model';
import { BookingsModule } from './booking/booking.module';
import { Session } from './sessions/sessions.model';
import { Ticket } from './tickets/tickets.model';
import { Booking } from './booking/booking.model';
import { Seat } from './seats/seats.model';
import { SeatModule } from './seats/seats.module';
import { SessionsModule } from './sessions/sessions.module';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Film, Session, Ticket, Booking, Seat],
      autoLoadModels: true,
    }),
    UsersModule, FilmsModule, BookingsModule, SeatModule, SessionsModule, TicketsModule
  ],
})
export class AppModule {}
