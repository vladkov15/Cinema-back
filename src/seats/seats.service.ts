import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Seat } from './seats.model';
import { where } from 'sequelize';


@Injectable()
export class SeatService {
  constructor(
    @InjectModel(Seat)
    private seatModel: typeof Seat,
  ) {}

  async findAll(): Promise<Seat[]> {
    return this.seatModel.findAll({include :{all: true}});
  }

  async findAllById(id:number): Promise<Seat[]> {
    return this.seatModel.findAll({include :{all: true} ,where:{session_id: id}});
  }

  async create(seatData: Seat): Promise<Seat> {
   return this.seatModel.create(seatData); 
  }
}