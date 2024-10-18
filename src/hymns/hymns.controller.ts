import { Controller, Get, Post, Body, Param, Delete, Patch, StreamableFile } from '@nestjs/common';
import { writeFileSync, createReadStream } from 'fs'
import { CreateHymnDto } from 'src/hymns/dto/create-hymn.dto';
import { UpdateHymnDto } from 'src/hymns/dto/update-hymn.dto';
import { HymnsService } from 'src/hymns/hymns.service';

@Controller('api/hymns')
export class HymnsController {
  constructor(private HymnsService: HymnsService) { }

  @Get()
  getAll() {
    return this.HymnsService.getAll()
  }

  @Get('/database')
  async getDataBase() {
    const data = await this.HymnsService.getAll()
    writeFileSync('db.json', JSON.stringify(data, null, 4), { flag: 'w', encoding: 'utf8' })
    const file = createReadStream('db.json', 'utf8')
    return new StreamableFile(file)
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.HymnsService.getOne(id)
  }

  @Post()
  add(@Body() createHymnDto: CreateHymnDto) {
    return this.HymnsService.create(createHymnDto)
  }

  @Delete()
  async delete(@Body() id: string) {
    console.log(id)
    const hymn = await this.HymnsService.delete(id)
    return hymn._id
  }

  @Patch()
  async update(@Body() hymn: UpdateHymnDto) {
    const updatedHymn = await this.HymnsService.toUpdate(hymn)
    return updatedHymn
  }

}
