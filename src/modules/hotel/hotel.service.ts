import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Injectable()
export class HotelService {
  constructor(private readonly prisma: PrismaService) { }

  create(dto: CreateHotelDto) {
    try {
      return this.prisma.hotel.create({ data: dto });
    } catch (error) {
    }
  }

  findAll(filters?: { dest?: string; prix?: string; classment?: number }) {
    const whereClauses: any = {};

    if (filters) {
      const { dest, prix, classment } = filters;
      const and = [];

      if (dest) {
        and.push({
          OR: [
            { ville: { contains: dest, mode: 'insensitive' } },
            { pays: { contains: dest, mode: 'insensitive' } },
          ],
        });
      }

      if (classment !== null && !Number.isNaN(classment)) {
        and.push({ etoiles: classment });
      }

      if (prix) {
        const parts = prix.split(',').map((p) => p.trim()).filter(Boolean);
        const min = parts[0] ? parseFloat(parts[0]) : undefined;
        const max = parts[1] ? parseFloat(parts[1]) : undefined;
        if (min || max) {
          const prixCond: { gte?: number, lte?: number } = {};
          if (typeof min !== 'undefined') prixCond.gte = min;
          if (typeof max !== 'undefined') prixCond.lte = max;
          and.push({ chambres: { some: { prixParNuit: prixCond } } });
        }
      }

      if (and.length) whereClauses.AND = and;
    }

    return this.prisma.hotel.findMany({ where: whereClauses, include: { chambres: true, offres: true } });
  }

  findOne(id: number) {
    return this.prisma.hotel.findUnique({
      where: { id },
      include: { chambres: { include: { typeChambre: true } }, offres: true },
    });
  }

  update(id: number, dto: UpdateHotelDto) {
    return this.prisma.hotel.update({ where: { id }, data: dto });
  }

  remove(id: number) {
    return this.prisma.hotel.delete({ where: { id } });
  }
}
