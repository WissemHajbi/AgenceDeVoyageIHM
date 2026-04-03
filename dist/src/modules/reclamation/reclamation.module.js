"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReclamationModule = void 0;
const common_1 = require("@nestjs/common");
const reclamation_service_1 = require("./reclamation.service");
const reclamation_controller_1 = require("./reclamation.controller");
let ReclamationModule = class ReclamationModule {
};
exports.ReclamationModule = ReclamationModule;
exports.ReclamationModule = ReclamationModule = __decorate([
    (0, common_1.Module)({
        controllers: [reclamation_controller_1.ReclamationController],
        providers: [reclamation_service_1.ReclamationService],
        exports: [reclamation_service_1.ReclamationService],
    })
], ReclamationModule);
//# sourceMappingURL=reclamation.module.js.map