"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReclamationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_reclamation_dto_1 = require("./create-reclamation.dto");
class UpdateReclamationDto extends (0, mapped_types_1.PartialType)(create_reclamation_dto_1.CreateReclamationDto) {
}
exports.UpdateReclamationDto = UpdateReclamationDto;
//# sourceMappingURL=update-reclamation.dto.js.map