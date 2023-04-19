import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Seat } from './seats.model';


@Injectable()
export class SeatService {
  constructor(
    @InjectModel(Seat)
    private seatModel: typeof Seat,
  ) {}

  async findAll(): Promise<Seat[]> {
    return this.seatModel.findAll({include :{all: true}});
  }

  async create(seatData: Seat): Promise<Seat> {
    return this.seatModel.create(seatData);
  }
}