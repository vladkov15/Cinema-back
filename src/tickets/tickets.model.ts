import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Booking } from 'src/booking/booking.model';
import { Film } from 'src/films/films.model';
import { Seat } from 'src/seats/seats.model';
import { Session } from 'src/sessions/sessions.model';
import { User } from 'src/users/user.model';
interface TicketCreationAttributes {
  booking_id: number;
  seat_id: number;
  user_id: number;
  session_id: number;
  created_at: Date;
}

@Table({ tableName: 'tickets' })
export class Ticket extends Model<Ticket, TicketCreationAttributes> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Booking)
  @Column({ type: DataType.INTEGER, allowNull: false })
  booking_id: number;

  @BelongsTo(() => Booking)
  booking: Booking;

  @ForeignKey(() => Film)
  @Column({ type: DataType.INTEGER, allowNull: false })
  film_id: number;

  @ForeignKey(() => Seat)
  @Column({ type: DataType.INTEGER, allowNull: false })
  seat_id: number;

  @ForeignKey(() => Session)
  @Column({ type: DataType.INTEGER, allowNull: false })
  session_id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  user_id: number;

  @BelongsTo(() => Seat)
  seat: Seat;

  @Column({ type: DataType.DATE, allowNull: false })
  created_at: Date;
}
