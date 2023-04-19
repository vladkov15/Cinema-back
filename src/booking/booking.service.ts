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

  async create(bookingData: Booking): Promise<Booking> {
    return this.bookingModel.create(bookingData);
  }
}
