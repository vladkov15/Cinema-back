import { Table, Model, Column, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Booking } from 'src/booking/booking.model';
import { Film } from 'src/films/films.model';
import { Seat } from 'src/seats/seats.model';

interface SessionCreationAttributes {
    film_id: number;
    start_time: Date;
    end_time: Date;
    booking_expiry: Date;
  }
  
  @Table({ tableName: 'sessions' })
  export class Session extends Model<Session, SessionCreationAttributes> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;
  
    @ForeignKey(() => Film)
    @Column({ type: DataType.INTEGER, allowNull: false })
    film_id: number;
  
    @BelongsTo(() => Film)
    film: Film;
  
    @Column({ type: DataType.DATE, allowNull: false })
    start_time: Date;
  
    @Column({ type: DataType.DATE, allowNull: false })
    end_time: Date;
  
    @Column({ type: DataType.DATE, allowNull: false })
    booking_expiry: Date;
  
    @HasMany(() => Seat)
    seats: Seat[];
  
    @HasMany(() => Booking)
    bookings: Booking[];
  }