"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChambreService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ChambreService = class ChambreService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(dto) {
        return this.prisma.chambre.create({ data: dto, include: { typeChambre: true } });
    }
    findAll() {
        return this.prisma.chambre.findMany({ include: { typeChambre: true, hotel: true } });
    }
    findOne(id) {
        return this.prisma.chambre.findUnique({
            where: { id },
            include: { typeChambre: true, hotel: true, reservations: true },
        });
    }
    findByHotel(hotelId) {
        return this.prisma.chambre.findMany({
            where: { hotelId },
            include: { typeChambre: true },
        });
    }
    update(id, dto) {
        return this.prisma.chambre.update({ where: { id }, data: dto });
    }
    remove(id) {
        return this.prisma.chambre.delete({ where: { id } });
    }
};
exports.ChambreService = ChambreService;
exports.ChambreService = ChambreService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChambreService);
//# sourceMappingURL=chambre.service.js.map