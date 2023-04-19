import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Booking } from "src/booking/booking.model";
import { Film } from "src/films/films.model";
import { Session } from "src/sessions/sessions.model";

interface SeatCreationAttributes {
    session_id: number;
    film_id: number;
    row: number;
    seat_number: number;
    status: string;
  }
  
  @Table({ tableName: 'seats' })
  export class Seat extends Model<Seat, SeatCreationAttributes> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;
  
    @ForeignKey(() => Session)
    @Column({ type: DataType.INTEGER, allowNull: false })
    session_id: number;

    @ForeignKey(() => Film)
    @Column({ type: DataType.INTEGER, allowNull: false })
    film_id: number;
  
    @BelongsTo(() => Session)
    session: Session;
  
    @Column({ type: DataType.INTEGER, allowNull: false })
    row: number;
  
    @Column({ type: DataType.INTEGER, allowNull: false })
    seat_number: number;
  
    @Column({ type: DataType.STRING, allowNull: false })
    status: string;
  
    @HasMany(() => Booking)
    bookings: Booking[];
  }
