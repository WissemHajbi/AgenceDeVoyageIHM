import { ReclamationService } from './reclamation.service';
import { CreateReclamationDto } from './dto/create-reclamation.dto';
import { UpdateReclamationDto } from './dto/update-reclamation.dto';
export declare class ReclamationController {
    private readonly reclamationService;
    constructor(reclamationService: ReclamationService);
    create(dto: CreateReclamationDto): import("@prisma/client").Prisma.Prisma__ReclamationClient<{
        id: number;
        description: string;
        agenceVoyageId: number;
        reservationId: number;
        sujet: string;
        dateOuverture: Date;
        dateResolution: Date | null;
        reponseAgence: string | null;
        statut: import("@prisma/client").$Enums.StatutReclamation;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        agenceVoyage: {
            email: string;
            motDePasse: string;
            actif: boolean;
            id: number;
            nomAgence: string;
            siret: string;
            adresseAgence: string;
        };
        reservation: {
            id: number;
            accountId: number;
            statut: import("@prisma/client").$Enums.StatutReservation;
            chambreId: number;
            dateCreation: Date;
            dateArrivee: Date;
            dateDepart: Date;
            nombrePersonnes: number;
            nombreNuits: number;
            montantTotal: number;
            codeConfirmation: string;
            motifBlocage: string | null;
        };
    } & {
        id: number;
        description: string;
        agenceVoyageId: number;
        reservationId: number;
        sujet: string;
        dateOuverture: Date;
        dateResolution: Date | null;
        reponseAgence: string | null;
        statut: import("@prisma/client").$Enums.StatutReclamation;
    })[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__ReclamationClient<({
        agenceVoyage: {
            email: string;
            motDePasse: string;
            actif: boolean;
            id: number;
            nomAgence: string;
            siret: string;
            adresseAgence: string;
        };
        reservation: {
            id: number;
            accountId: number;
            statut: import("@prisma/client").$Enums.StatutReservation;
            chambreId: number;
            dateCreation: Date;
            dateArrivee: Date;
            dateDepart: Date;
            nombrePersonnes: number;
            nombreNuits: number;
            montantTotal: number;
            codeConfirmation: string;
            motifBlocage: string | null;
        };
    } & {
        id: number;
        description: string;
        agenceVoyageId: number;
        reservationId: number;
        sujet: string;
        dateOuverture: Date;
        dateResolution: Date | null;
        reponseAgence: string | null;
        statut: import("@prisma/client").$Enums.StatutReclamation;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, dto: UpdateReclamationDto): import("@prisma/client").Prisma.Prisma__ReclamationClient<{
        id: number;
        description: string;
        agenceVoyageId: number;
        reservationId: number;
        sujet: string;
        dateOuverture: Date;
        dateResolution: Date | null;
        reponseAgence: string | null;
        statut: import("@prisma/client").$Enums.StatutReclamation;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__ReclamationClient<{
        id: number;
        description: string;
        agenceVoyageId: number;
        reservationId: number;
        sujet: string;
        dateOuverture: Date;
        dateResolution: Date | null;
        reponseAgence: string | null;
        statut: import("@prisma/client").$Enums.StatutReclamation;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
