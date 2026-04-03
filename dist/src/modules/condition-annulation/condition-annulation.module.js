"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionAnnulationModule = void 0;
const common_1 = require("@nestjs/common");
const condition_annulation_service_1 = require("./condition-annulation.service");
const condition_annulation_controller_1 = require("./condition-annulation.controller");
let ConditionAnnulationModule = class ConditionAnnulationModule {
};
exports.ConditionAnnulationModule = ConditionAnnulationModule;
exports.ConditionAnnulationModule = ConditionAnnulationModule = __decorate([
    (0, common_1.Module)({
        controllers: [condition_annulation_controller_1.ConditionAnnulationController],
        providers: [condition_annulation_service_1.ConditionAnnulationService],
        exports: [condition_annulation_service_1.ConditionAnnulationService],
    })
], ConditionAnnulationModule);
//# sourceMappingURL=condition-annulation.module.js.map