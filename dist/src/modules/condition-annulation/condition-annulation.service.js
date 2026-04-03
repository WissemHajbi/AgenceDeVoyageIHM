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
exports.ConditionAnnulationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ConditionAnnulationService = class ConditionAnnulationService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(dto) {
        return this.prisma.conditionAnnulation.create({ data: dto });
    }
    findAll() {
        return this.prisma.conditionAnnulation.findMany({ include: { systemConfig: true } });
    }
    findOne(id) {
        return this.prisma.conditionAnnulation.findUnique({ where: { id }, include: { systemConfig: true } });
    }
    update(id, dto) {
        return this.prisma.conditionAnnulation.update({ where: { id }, data: dto });
    }
    remove(id) {
        return this.prisma.conditionAnnulation.delete({ where: { id } });
    }
};
exports.ConditionAnnulationService = ConditionAnnulationService;
exports.ConditionAnnulationService = ConditionAnnulationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConditionAnnulationService);
//# sourceMappingURL=condition-annulation.service.js.map