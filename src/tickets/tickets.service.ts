import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Ticket } from './tickets.model';
;

@Injectable()
export class TicketsService {
  constructor(@InjectModel(Ticket) private readonly ticketModel: typeof Ticket) {}

  async findAll(): Promise<Ticket[]> {
    return this.ticketModel.findAll({include :{all: true}});
  }

  

  async findOne(id: number): Promise<Ticket> {
    return this.ticketModel.findByPk(id);
  }

  async findAllByUserId(id:number): Promise<Ticket[]> {
    return this.ticketModel.findAll({include :{all: true}, where:{user_id: id}});
  }
  

  async create(createTicketDto: any): Promise<Ticket> {
    return this.ticketModel.create(createTicketDto);
  }

  async update(id: number, updateTicketDto: any): Promise<Ticket> {
    const ticket = await this.ticketModel.findByPk(id);
    await ticket.update(updateTicketDto);
    return ticket;
  }

  async remove(id: number): Promise<void> {
    const ticket = await this.ticketModel.findByPk(id);
    await ticket.destroy();
  }
}