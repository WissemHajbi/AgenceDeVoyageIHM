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
exports.AgenceVoyageService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let AgenceVoyageService = class AgenceVoyageService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(dto) {
        return this.prisma.agenceVoyage.create({ data: dto });
    }
    findAll() {
        return this.prisma.agenceVoyage.findMany({ include: { hotels: true } });
    }
    findOne(id) {
        return this.prisma.agenceVoyage.findUnique({
            where: { id },
            include: { hotels: true, reclamations: true },
        });
    }
    update(id, dto) {
        return this.prisma.agenceVoyage.update({ where: { id }, data: dto });
    }
    remove(id) {
        return this.prisma.agenceVoyage.delete({ where: { id } });
    }
};
exports.AgenceVoyageService = AgenceVoyageService;
exports.AgenceVoyageService = AgenceVoyageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AgenceVoyageService);
//# sourceMappingURL=agence-voyage.service.js.map