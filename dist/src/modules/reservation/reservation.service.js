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
exports.ReservationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ReservationService = class ReservationService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(dto) {
        return this.prisma.reservation.create({
            data: dto,
            include: { account: true, chambre: true },
        });
    }
    findAll() {
        return this.prisma.reservation.findMany({
            include: { account: { include: { profile: true } }, chambre: true },
        });
    }
    findOne(id) {
        return this.prisma.reservation.findUnique({
            where: { id },
            include: {
                account: { include: { profile: true } },
                chambre: { include: { hotel: true, typeChambre: true } },
                avis: true,
                reclamations: true,
            },
        });
    }
    findByAccount(accountId) {
        return this.prisma.reservation.findMany({
            where: { accountId },
            include: { chambre: { include: { hotel: true } } },
        });
    }
    update(id, dto) {
        return this.prisma.reservation.update({ where: { id }, data: dto });
    }
    updateStatut(id, statut, motifBlocage) {
        return this.prisma.reservation.update({
            where: { id },
            data: { statut, ...(motifBlocage ? { motifBlocage } : {}) },
        });
    }
    remove(id) {
        return this.prisma.reservation.delete({ where: { id } });
    }
};
exports.ReservationService = ReservationService;
exports.ReservationService = ReservationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReservationService);
//# sourceMappingURL=reservation.service.js.map