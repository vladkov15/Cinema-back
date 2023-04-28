import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Booking } from './booking.model';
import { BookingService } from './booking.service';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get()
  async findAll(): Promise<Booking[]> {
    return this.bookingService.findAll();
  }

  @Get(':id')
  getFilm(@Param('id') id: number) {
    console.log(id);
    return this.bookingService.findAllBySessionId(id);
  }

  @Get('user/:id')
  getAllUsersBooking(@Param('id') id: number) {
    console.log(id);
    return this.bookingService.findAllBySessionId(id);
  }

  @Post()
  async create(@Body() bookingData: Booking): Promise<Booking> {
    return this.bookingService.create(bookingData);
  }
}
