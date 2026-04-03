import { PrismaService } from '../../prisma/prisma.service';
import { CreateAgenceVoyageDto } from './dto/create-agence-voyage.dto';
import { UpdateAgenceVoyageDto } from './dto/update-agence-voyage.dto';
export declare class AgenceVoyageService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateAgenceVoyageDto): import("@prisma/client").Prisma.Prisma__AgenceVoyageClient<{
        email: string;
        motDePasse: string;
        actif: boolean;
        id: number;
        nomAgence: string;
        siret: string;
        adresseAgence: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        hotels: {
            email: string;
            actif: boolean;
            id: number;
            nom: string;
            telephone: string;
            adresse: string;
            ville: string;
            pays: string;
            etoiles: number;
            description: string | null;
            estPartenaire: boolean;
            agenceVoyageId: number;
        }[];
    } & {
        email: string;
        motDePasse: string;
        actif: boolean;
        id: number;
        nomAgence: string;
        siret: string;
        adresseAgence: string;
    })[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__AgenceVoyageClient<({
        hotels: {
            email: string;
            actif: boolean;
            id: number;
            nom: string;
            telephone: string;
            adresse: string;
            ville: string;
            pays: string;
            etoiles: number;
            description: string | null;
            estPartenaire: boolean;
            agenceVoyageId: number;
        }[];
        reclamations: {
            id: number;
            description: string;
            agenceVoyageId: number;
            reservationId: number;
            sujet: string;
            dateOuverture: Date;
            dateResolution: Date | null;
            reponseAgence: string | null;
            statut: import("@prisma/client").$Enums.StatutReclamation;
        }[];
    } & {
        email: string;
        motDePasse: string;
        actif: boolean;
        id: number;
        nomAgence: string;
        siret: string;
        adresseAgence: string;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, dto: UpdateAgenceVoyageDto): import("@prisma/client").Prisma.Prisma__AgenceVoyageClient<{
        email: string;
        motDePasse: string;
        actif: boolean;
        id: number;
        nomAgence: string;
        siret: string;
        adresseAgence: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__AgenceVoyageClient<{
        email: string;
        motDePasse: string;
        actif: boolean;
        id: number;
        nomAgence: string;
        siret: string;
        adresseAgence: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
