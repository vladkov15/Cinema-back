import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Session } from './sessions.model';
import { SessionsService } from './sessions.service';


@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Get()
  async findAll(): Promise<Session[]> {
    return this.sessionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Session> {
    return this.sessionsService.findOne(id);
  }

  @Post()
  async create(@Body() createSessionDto: any): Promise<Session> {
    return this.sessionsService.create(createSessionDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateSessionDto: any): Promise<Session> {
    return this.sessionsService.update(id, updateSessionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.sessionsService.remove(id);
  }
}