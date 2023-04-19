import { Body, Controller, Get, Post } from '@nestjs/common';
import { Booking } from './booking.model';
import { BookingService } from './booking.service';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get()
  async findAll(): Promise<Booking[]> {
    return this.bookingService.findAll();
  }

  @Post()
  async create(@Body() bookingData: Booking): Promise<Booking> {
    return this.bookingService.create(bookingData);
  }
}