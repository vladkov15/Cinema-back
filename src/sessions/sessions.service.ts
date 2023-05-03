import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Session } from './sessions.model';
import sequelize, { Op } from 'sequelize';


@Injectable()
export class SessionsService {
  constructor(@InjectModel(Session) private readonly sessionModel: typeof Session) {}

  async findAll(): Promise<Session[]> {
    return this.sessionModel.findAll({include :{all: true}});
  }
  async findAllByDate(date: string): Promise<Session[]> {
    return this.sessionModel.findAll({ include :{all: true},
      where: sequelize.where(
        sequelize.fn('DATE', sequelize.col('date')), // Форматируем дату в вид 'yyyy-mm-dd'
        {
          [Op.eq]: new Date(date).toISOString().slice(0, 10) // Сравниваем даты по форматированной строке 'yyyy-mm-dd'
        }
      )
    });
  }
  async findOne(id: number): Promise<Session> {
    return this.sessionModel.findByPk(id);
  }

  async findOneByFilmId(id: number): Promise<Session[]>{
    return this.sessionModel.findAll({ include :{all: true} ,where:{film_id: id}})
  }
  
  async findOneBySessionId(id: number): Promise<Session[]>{
    return this.sessionModel.findAll({ include :{all: true} ,where:{id: id}})
  }

  // async findOneByUserId(id: number): Promise<Session[]>{
  //   return this.sessionModel.findAll({ include :{all: true} ,where:{user_id: id}})
  // }

  async create(createSessionDto: Session): Promise<Session> {
    return this.sessionModel.create(createSessionDto);
  }

  async update(id: number, updateSessionDto: any): Promise<Session> {
    const session = await this.sessionModel.findByPk(id);
    await session.update(updateSessionDto);
    return session;
  }

  async remove(id: number): Promise<void> {
    const session = await this.sessionModel.findByPk(id);
    await session.destroy();
  }
}
