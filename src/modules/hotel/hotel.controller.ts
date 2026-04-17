import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Controller('hotels')
export class HotelController {
  constructor(private readonly hotelService: HotelService) { }

  @Post()
  create(@Body() dto: CreateHotelDto) {
    return this.hotelService.create(dto);
  }

  @Get()
  findAll(
    @Query('dest') dest?: string,
    @Query('prix') prix?: string,
    @Query('classment') classment?: string,
  ) {
    const classmentNum = classment ? parseInt(classment, 10) : undefined;
    return this.hotelService.findAll({ dest, prix, classment: classmentNum });
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.hotelService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateHotelDto) {
    return this.hotelService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.hotelService.remove(id);
  }
}
