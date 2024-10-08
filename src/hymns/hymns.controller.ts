import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
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
