import { PrismaService } from '../../prisma/prisma.service';
import { CreateTypeChambreDto } from './dto/create-type-chambre.dto';
import { UpdateTypeChambreDto } from './dto/update-type-chambre.dto';
export declare class TypeChambreService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateTypeChambreDto): import("@prisma/client").Prisma.Prisma__TypeChambreClient<{
        id: number;
        description: string | null;
        libelle: string;
        superficieM2: number;
        equipements: string[];
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        description: string | null;
        libelle: string;
        superficieM2: number;
        equipements: string[];
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__TypeChambreClient<{
        id: number;
        description: string | null;
        libelle: string;
        superficieM2: number;
        equipements: string[];
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, dto: UpdateTypeChambreDto): import("@prisma/client").Prisma.Prisma__TypeChambreClient<{
        id: number;
        description: string | null;
        libelle: string;
        superficieM2: number;
        equipements: string[];
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__TypeChambreClient<{
        id: number;
        description: string | null;
        libelle: string;
        superficieM2: number;
        equipements: string[];
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
