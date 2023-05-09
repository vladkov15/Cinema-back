import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';

import { Film } from './films.model';
import { CreateFilmDTO } from './dto/create-films.dto';
import { Seat } from 'src/seats/seats.model';

@Injectable()
export class FilmsService {
  constructor(@InjectModel(Film) private filmRepository: typeof Film, @InjectModel(Seat)
  private seatModel: typeof Seat) {}

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

  async remove(id: number): Promise<void> {
    const seats = await this.seatModel.findAll({where: {film_id: id}})
    seats.map(async (i) => {
      await i.destroy();
    })
    const ticket = await this.filmRepository.findByPk(id);
    await ticket.destroy();
  }
  // async getFilmByDate(date: Date) {
  //   const film = await this.filmRepository.findAll({ where: { date: date } });
  //   return film;
  // }
}
