import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Film } from 'src/films/films.model';
import { Seat } from 'src/seats/seats.model';
import { Session } from 'src/sessions/sessions.model';
import { Ticket } from 'src/tickets/tickets.model';
import { User } from 'src/users/user.model';
interface BookingCreationAttributes {
  user_id: number;
  film_id: number;
  session_id: number;
  seat_id: number;
  pay: boolean;
  created_at: Date;
  booking_expiry: Date;
}

@Table({ tableName: 'bookings' })
export class Booking extends Model<Booking, BookingCreationAttributes> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  user_id: number;

  @ForeignKey(() => Film)
  @Column({ type: DataType.INTEGER, allowNull: false })
  film_id: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Session)
  @Column({ type: DataType.INTEGER, allowNull: false })
  session_id: number;

  @BelongsTo(() => Session)
  session: Session;

  @ForeignKey(() => Seat)
  @Column({ type: DataType.INTEGER, allowNull: false })
  seat_id: number;

  @BelongsTo(() => Seat)
  seat: Seat;

  @Column({ type: DataType.DATE, allowNull: false })
  created_at: Date;

  @Column({ type: DataType.BOOLEAN, allowNull: false })
  pay: boolean;

  @Column({ type: DataType.DATE, allowNull: false })
  booking_expiry: Date;

  @HasMany(() => Ticket)
  tickets: Ticket[];
}
