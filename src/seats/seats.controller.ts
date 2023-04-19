import { Controller, Get, Post, Body } from '@nestjs/common';
import { Seat } from './seats.model';
import { SeatService } from './seats.service';


@Controller('seats')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @Get()
  async findAll(): Promise<Seat[]> {
    return this.seatService.findAll();
  }

  @Post()
  async create(@Body() seatData: Seat): Promise<Seat> {
    return this.seatService.create(seatData);
  }
}