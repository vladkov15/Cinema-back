import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Ticket } from './tickets.model';
import { TicketsService } from './tickets.service';


@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get()
  async findAll(): Promise<Ticket[]> {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Ticket> {
    return this.ticketsService.findOne(id);
  }

  @Post()
  async create(@Body() createTicketDto: any): Promise<Ticket> {
    return this.ticketsService.create(createTicketDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateTicketDto: any): Promise<Ticket> {
    return this.ticketsService.update(id, updateTicketDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.ticketsService.remove(id);
  }
}