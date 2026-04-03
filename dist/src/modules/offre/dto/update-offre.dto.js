"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOffreDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_offre_dto_1 = require("./create-offre.dto");
class UpdateOffreDto extends (0, mapped_types_1.PartialType)(create_offre_dto_1.CreateOffreDto) {
}
exports.UpdateOffreDto = UpdateOffreDto;
//# sourceMappingURL=update-offre.dto.js.map