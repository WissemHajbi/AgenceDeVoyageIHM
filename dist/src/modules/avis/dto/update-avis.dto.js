"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAvisDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_avis_dto_1 = require("./create-avis.dto");
class UpdateAvisDto extends (0, mapped_types_1.PartialType)(create_avis_dto_1.CreateAvisDto) {
}
exports.UpdateAvisDto = UpdateAvisDto;
//# sourceMappingURL=update-avis.dto.js.map