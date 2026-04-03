import { ConditionAnnulationService } from './condition-annulation.service';
import { CreateConditionAnnulationDto } from './dto/create-condition-annulation.dto';
import { UpdateConditionAnnulationDto } from './dto/update-condition-annulation.dto';
export declare class ConditionAnnulationController {
    private readonly conditionAnnulationService;
    constructor(conditionAnnulationService: ConditionAnnulationService);
    create(dto: CreateConditionAnnulationDto): import("@prisma/client").Prisma.Prisma__ConditionAnnulationClient<{
        id: number;
        description: string | null;
        delaiLimiteHeures: number;
        fraisAnnulation: number;
        remboursementTotal: boolean;
        systemConfigId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        systemConfig: {
            id: number;
            description: string | null;
            cle: string;
            valeur: string;
        };
    } & {
        id: number;
        description: string | null;
        delaiLimiteHeures: number;
        fraisAnnulation: number;
        remboursementTotal: boolean;
        systemConfigId: number;
    })[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__ConditionAnnulationClient<({
        systemConfig: {
            id: number;
            description: string | null;
            cle: string;
            valeur: string;
        };
    } & {
        id: number;
        description: string | null;
        delaiLimiteHeures: number;
        fraisAnnulation: number;
        remboursementTotal: boolean;
        systemConfigId: number;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, dto: UpdateConditionAnnulationDto): import("@prisma/client").Prisma.Prisma__ConditionAnnulationClient<{
        id: number;
        description: string | null;
        delaiLimiteHeures: number;
        fraisAnnulation: number;
        remboursementTotal: boolean;
        systemConfigId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__ConditionAnnulationClient<{
        id: number;
        description: string | null;
        delaiLimiteHeures: number;
        fraisAnnulation: number;
        remboursementTotal: boolean;
        systemConfigId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
