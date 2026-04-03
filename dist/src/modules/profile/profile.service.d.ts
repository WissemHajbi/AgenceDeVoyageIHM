import { PrismaService } from '../../prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfileService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateProfileDto): import("@prisma/client").Prisma.Prisma__ProfileClient<{
        id: number;
        accountId: number;
        nom: string;
        prenom: string;
        telephone: string | null;
        adresse: string | null;
        nationalite: string | null;
        photo: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findOne(accountId: number): import("@prisma/client").Prisma.Prisma__ProfileClient<{
        id: number;
        accountId: number;
        nom: string;
        prenom: string;
        telephone: string | null;
        adresse: string | null;
        nationalite: string | null;
        photo: string | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, dto: UpdateProfileDto): import("@prisma/client").Prisma.Prisma__ProfileClient<{
        id: number;
        accountId: number;
        nom: string;
        prenom: string;
        telephone: string | null;
        adresse: string | null;
        nationalite: string | null;
        photo: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
