"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_module_1 = require("./prisma/prisma.module");
const account_module_1 = require("./modules/account/account.module");
const profile_module_1 = require("./modules/profile/profile.module");
const agence_voyage_module_1 = require("./modules/agence-voyage/agence-voyage.module");
const hotel_module_1 = require("./modules/hotel/hotel.module");
const type_chambre_module_1 = require("./modules/type-chambre/type-chambre.module");
const chambre_module_1 = require("./modules/chambre/chambre.module");
const reservation_module_1 = require("./modules/reservation/reservation.module");
const offre_module_1 = require("./modules/offre/offre.module");
const avis_module_1 = require("./modules/avis/avis.module");
const notification_module_1 = require("./modules/notification/notification.module");
const reclamation_module_1 = require("./modules/reclamation/reclamation.module");
const system_config_module_1 = require("./modules/system-config/system-config.module");
const condition_annulation_module_1 = require("./modules/condition-annulation/condition-annulation.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            prisma_module_1.PrismaModule,
            account_module_1.AccountModule,
            profile_module_1.ProfileModule,
            agence_voyage_module_1.AgenceVoyageModule,
            hotel_module_1.HotelModule,
            type_chambre_module_1.TypeChambreModule,
            chambre_module_1.ChambreModule,
            reservation_module_1.ReservationModule,
            offre_module_1.OffreModule,
            avis_module_1.AvisModule,
            notification_module_1.NotificationModule,
            reclamation_module_1.ReclamationModule,
            system_config_module_1.SystemConfigModule,
            condition_annulation_module_1.ConditionAnnulationModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map