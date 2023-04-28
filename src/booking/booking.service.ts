import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Booking } from './booking.model';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking)
    private bookingModel: typeof Booking
  ) {}

  async findAll(): Promise<Booking[]> {
    return this.bookingModel.findAll({include :{all: true}});
  }

  async findAllBySessionId(id: number): Promise<Booking[]> {
    return this.bookingModel.findAll({where :{session_id: id}});
  }
  async findAllByUserId(id: number): Promise<Booking[]> {
    return this.bookingModel.findAll({where :{user_id: id}});
  }
  async create(bookingData: Booking): Promise<Booking> {
    return this.bookingModel.create(bookingData);
  }
}
