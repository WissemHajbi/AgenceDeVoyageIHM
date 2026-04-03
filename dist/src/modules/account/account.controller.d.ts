import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    create(dto: CreateAccountDto): import("@prisma/client").Prisma.Prisma__AccountClient<{
        email: string;
        motDePasse: string;
        actif: boolean;
        dateInscription: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        profile: {
            id: number;
            accountId: number;
            nom: string;
            prenom: string;
            telephone: string | null;
            adresse: string | null;
            nationalite: string | null;
            photo: string | null;
        } | null;
    } & {
        email: string;
        motDePasse: string;
        actif: boolean;
        dateInscription: Date;
        id: number;
    })[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__AccountClient<({
        profile: {
            id: number;
            accountId: number;
            nom: string;
            prenom: string;
            telephone: string | null;
            adresse: string | null;
            nationalite: string | null;
            photo: string | null;
        } | null;
    } & {
        email: string;
        motDePasse: string;
        actif: boolean;
        dateInscription: Date;
        id: number;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, dto: UpdateAccountDto): import("@prisma/client").Prisma.Prisma__AccountClient<{
        email: string;
        motDePasse: string;
        actif: boolean;
        dateInscription: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__AccountClient<{
        email: string;
        motDePasse: string;
        actif: boolean;
        dateInscription: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
