import { PrismaService } from '../../prisma/prisma.service';
import { CreateSystemConfigDto } from './dto/create-system-config.dto';
import { UpdateSystemConfigDto } from './dto/update-system-config.dto';
export declare class SystemConfigService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateSystemConfigDto): import("@prisma/client").Prisma.Prisma__SystemConfigClient<{
        id: number;
        description: string | null;
        cle: string;
        valeur: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        conditionsAnnulation: {
            id: number;
            description: string | null;
            delaiLimiteHeures: number;
            fraisAnnulation: number;
            remboursementTotal: boolean;
            systemConfigId: number;
        }[];
    } & {
        id: number;
        description: string | null;
        cle: string;
        valeur: string;
    })[]>;
    findByCle(cle: string): import("@prisma/client").Prisma.Prisma__SystemConfigClient<{
        id: number;
        description: string | null;
        cle: string;
        valeur: string;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, dto: UpdateSystemConfigDto): import("@prisma/client").Prisma.Prisma__SystemConfigClient<{
        id: number;
        description: string | null;
        cle: string;
        valeur: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__SystemConfigClient<{
        id: number;
        description: string | null;
        cle: string;
        valeur: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
