"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTypeChambreDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_type_chambre_dto_1 = require("./create-type-chambre.dto");
class UpdateTypeChambreDto extends (0, mapped_types_1.PartialType)(create_type_chambre_dto_1.CreateTypeChambreDto) {
}
exports.UpdateTypeChambreDto = UpdateTypeChambreDto;
//# sourceMappingURL=update-type-chambre.dto.js.map