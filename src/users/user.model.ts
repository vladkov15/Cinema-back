import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Booking } from 'src/booking/booking.model';
import { Ticket } from 'src/tickets/tickets.model';

interface UserCreationAttr{
    email: string,
    name: string,
    second_name: string,
    password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttr> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;
  @Column({ type: DataType.STRING, allowNull: false })
  second_name: string;
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;
  @HasMany(() => Booking)
  bookings: Booking[];
  @HasMany(() => Ticket)
  ticket: Ticket[];
}


