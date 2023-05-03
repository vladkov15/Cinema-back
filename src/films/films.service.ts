import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';

import { Film } from './films.model';
import { CreateFilmDTO } from './dto/create-films.dto';

@Injectable()
export class FilmsService {
  constructor(@InjectModel(Film) private filmRepository: typeof Film) {}

  async createFilm(dto: CreateFilmDTO) {
    const film = await this.filmRepository.create(dto);
    return film;
  }

  async getAllFillms() {
    const films = await this.filmRepository.findAll({ include: { all: true } });
    return films;
  }

  async getFilmById(id: number) {
    const film = await this.filmRepository.findAll({ where: { id: id } });
    return film;
  }

  // async getFilmByDate(date: Date) {
  //   const film = await this.filmRepository.findAll({ where: { date: date } });
  //   return film;
  // }
}
