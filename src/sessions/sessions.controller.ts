import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { Session } from './sessions.model';
import { SessionsService } from './sessions.service';


@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  

  @Get()
  async findOne(@Query('film_id') filmId: number): Promise<Session[]> {
    console.log(filmId);
    return this.sessionsService.findOneByFilmId(filmId);
  }

  @Get('/session')
  async findOneById(@Query('session_id') sessionId: number): Promise<Session[]> {
    console.log(sessionId);
    return this.sessionsService.findOneBySessionId(sessionId);
  }

  @Get('/sessions/session/:id')
  async findOneByIdSession(@Param('id') id: number): Promise<Session> {
  
    return this.sessionsService.findOne(id);
  }
  
  @Get('/date')
  async findAllByDate(@Query('date') date: string): Promise<Session[]> {
    console.log(date);
    return this.sessionsService.findAllByDate(date)
  }
  @Post()
  async create(@Body() createSessionDto: Session): Promise<Session> {
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