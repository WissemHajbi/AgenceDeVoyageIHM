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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReclamationController = void 0;
const common_1 = require("@nestjs/common");
const reclamation_service_1 = require("./reclamation.service");
const create_reclamation_dto_1 = require("./dto/create-reclamation.dto");
const update_reclamation_dto_1 = require("./dto/update-reclamation.dto");
let ReclamationController = class ReclamationController {
    reclamationService;
    constructor(reclamationService) {
        this.reclamationService = reclamationService;
    }
    create(dto) {
        return this.reclamationService.create(dto);
    }
    findAll() {
        return this.reclamationService.findAll();
    }
    findOne(id) {
        return this.reclamationService.findOne(id);
    }
    update(id, dto) {
        return this.reclamationService.update(id, dto);
    }
    remove(id) {
        return this.reclamationService.remove(id);
    }
};
exports.ReclamationController = ReclamationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reclamation_dto_1.CreateReclamationDto]),
    __metadata("design:returntype", void 0)
], ReclamationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReclamationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReclamationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_reclamation_dto_1.UpdateReclamationDto]),
    __metadata("design:returntype", void 0)
], ReclamationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReclamationController.prototype, "remove", null);
exports.ReclamationController = ReclamationController = __decorate([
    (0, common_1.Controller)('reclamations'),
    __metadata("design:paramtypes", [reclamation_service_1.ReclamationService])
], ReclamationController);
//# sourceMappingURL=reclamation.controller.js.map