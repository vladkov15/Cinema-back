import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Booking } from 'src/booking/booking.model';
import { Seat } from 'src/seats/seats.model';
import { Session } from 'src/sessions/sessions.model';

interface FilmCreationAttr {
  id: number;
  title: string;
  description: string;
  rating: string;
  poster_url: string;
}

@Table({ tableName: 'films' })
export class Film extends Model<Film, FilmCreationAttr> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;
  @Column({ type: DataType.STRING(1000), allowNull: false })
  description: string;
  @Column({ type: DataType.STRING, allowNull: false })
  rating: string;
  @Column({ type: DataType.STRING, allowNull: false })
  poster_url: string;
  @HasMany(() => Session)
  session: Session[];
}
