import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateAccountDto) {
    return this.prisma.account.create({ data: dto });
  }

  findAll() {
    return this.prisma.account.findMany({ include: { profile: true } });
  }

  findOne(id: number) {
    return this.prisma.account.findUnique({ where: { id }, include: { profile: true } });
  }

  update(id: number, dto: UpdateAccountDto) {
    return this.prisma.account.update({ where: { id }, data: dto });
  }

  remove(id: number) {
    return this.prisma.account.delete({ where: { id } });
  }
}
