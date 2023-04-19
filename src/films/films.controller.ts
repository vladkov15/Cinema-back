import { Body, Controller, Get, Post } from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDTO } from './dto/create-films.dto';


@Controller('films')
export class FilmsController {
  constructor(private filmsService: FilmsService) {}

  @Post()
  create(@Body() filmDto: CreateFilmDTO) {
    return this.filmsService.createFilm(filmDto);
  }

  @Get()
  getAll(){
    return this.filmsService.getAllFillms()
  }
}
