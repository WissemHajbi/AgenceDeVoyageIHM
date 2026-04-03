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
exports.ConditionAnnulationController = void 0;
const common_1 = require("@nestjs/common");
const condition_annulation_service_1 = require("./condition-annulation.service");
const create_condition_annulation_dto_1 = require("./dto/create-condition-annulation.dto");
const update_condition_annulation_dto_1 = require("./dto/update-condition-annulation.dto");
let ConditionAnnulationController = class ConditionAnnulationController {
    conditionAnnulationService;
    constructor(conditionAnnulationService) {
        this.conditionAnnulationService = conditionAnnulationService;
    }
    create(dto) {
        return this.conditionAnnulationService.create(dto);
    }
    findAll() {
        return this.conditionAnnulationService.findAll();
    }
    findOne(id) {
        return this.conditionAnnulationService.findOne(id);
    }
    update(id, dto) {
        return this.conditionAnnulationService.update(id, dto);
    }
    remove(id) {
        return this.conditionAnnulationService.remove(id);
    }
};
exports.ConditionAnnulationController = ConditionAnnulationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_condition_annulation_dto_1.CreateConditionAnnulationDto]),
    __metadata("design:returntype", void 0)
], ConditionAnnulationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConditionAnnulationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConditionAnnulationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_condition_annulation_dto_1.UpdateConditionAnnulationDto]),
    __metadata("design:returntype", void 0)
], ConditionAnnulationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConditionAnnulationController.prototype, "remove", null);
exports.ConditionAnnulationController = ConditionAnnulationController = __decorate([
    (0, common_1.Controller)('conditions-annulation'),
    __metadata("design:paramtypes", [condition_annulation_service_1.ConditionAnnulationService])
], ConditionAnnulationController);
//# sourceMappingURL=condition-annulation.controller.js.map