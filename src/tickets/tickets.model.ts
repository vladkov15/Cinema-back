import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Booking } from "src/booking/booking.model";
import { Seat } from "src/seats/seats.model";
interface TicketCreationAttributes {
    booking_id: number;
    seat_id: number;
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
  
    @ForeignKey(() => Seat)
    @Column({ type: DataType.INTEGER, allowNull: false })
    seat_id: number;
  
    @BelongsTo(() => Seat)
    seat: Seat;
  
    @Column({ type: DataType.DATE, allowNull: false })
    created_at: Date;
  }
  