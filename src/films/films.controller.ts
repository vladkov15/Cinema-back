import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDTO } from './dto/create-films.dto';
import { Response } from 'express';
import * as fs from 'fs/promises';
import { FileInterceptor } from '@nestjs/platform-express';
import * as path from 'path';

@Controller('films')
export class FilmsController {
  constructor(private filmsService: FilmsService) {}

  @Post()
  create(@Body() filmDto: CreateFilmDTO) {
    return this.filmsService.createFilm(filmDto);
  }

  @Get()
  getAll() {
    return this.filmsService.getAllFillms();
  }

  @Get(':id')
  getFilm(@Param('id') id: number){
    console.log(id);
    
    return this.filmsService.getFilmById(id);
  }

}

@Controller('images')
export class ImagesController {
  @Get(':filename')
  async getImage(@Param('filename') filename: string, @Res() res: Response) {
    const path = `public/images/${filename}`;

    const exists = await fs
      .access(path, fs.constants.F_OK)
      .then(() => true)
      .catch(() => false);
    if (exists) {
      res.sendFile(path, { root: '.' });
    } else {
      res.status(404).send('Image not found');
    }
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }
    const filename = file.originalname;
    const filePath = path.join( 'public', 'images', filename);
    await fs.writeFile(filePath, file.buffer);
    return { message: 'Image uploaded successfully' };
  }
}
