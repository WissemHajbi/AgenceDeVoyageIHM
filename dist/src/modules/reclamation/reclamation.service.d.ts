import { PrismaService } from '../../prisma/prisma.service';
import { CreateReclamationDto } from './dto/create-reclamation.dto';
import { UpdateReclamationDto } from './dto/update-reclamation.dto';
import { StatutReclamation } from '@prisma/client';
export declare class ReclamationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateReclamationDto): import("@prisma/client").Prisma.Prisma__ReclamationClient<{
        id: number;
        description: string;
        agenceVoyageId: number;
        statut: import("@prisma/client").$Enums.StatutReclamation;
        reservationId: number;
        sujet: string;
        dateOuverture: Date;
        dateResolution: Date | null;
        reponseAgence: string | null;
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
            chambreId: number;
            dateArrivee: Date;
            dateDepart: Date;
            nombrePersonnes: number;
            nombreNuits: number;
            montantTotal: number;
            codeConfirmation: string;
            statut: import("@prisma/client").$Enums.StatutReservation;
            motifBlocage: string | null;
            dateCreation: Date;
        };
    } & {
        id: number;
        description: string;
        agenceVoyageId: number;
        statut: import("@prisma/client").$Enums.StatutReclamation;
        reservationId: number;
        sujet: string;
        dateOuverture: Date;
        dateResolution: Date | null;
        reponseAgence: string | null;
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
            chambreId: number;
            dateArrivee: Date;
            dateDepart: Date;
            nombrePersonnes: number;
            nombreNuits: number;
            montantTotal: number;
            codeConfirmation: string;
            statut: import("@prisma/client").$Enums.StatutReservation;
            motifBlocage: string | null;
            dateCreation: Date;
        };
    } & {
        id: number;
        description: string;
        agenceVoyageId: number;
        statut: import("@prisma/client").$Enums.StatutReclamation;
        reservationId: number;
        sujet: string;
        dateOuverture: Date;
        dateResolution: Date | null;
        reponseAgence: string | null;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findByAgence(agenceVoyageId: number): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        description: string;
        agenceVoyageId: number;
        statut: import("@prisma/client").$Enums.StatutReclamation;
        reservationId: number;
        sujet: string;
        dateOuverture: Date;
        dateResolution: Date | null;
        reponseAgence: string | null;
    }[]>;
    update(id: number, dto: UpdateReclamationDto): import("@prisma/client").Prisma.Prisma__ReclamationClient<{
        id: number;
        description: string;
        agenceVoyageId: number;
        statut: import("@prisma/client").$Enums.StatutReclamation;
        reservationId: number;
        sujet: string;
        dateOuverture: Date;
        dateResolution: Date | null;
        reponseAgence: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateStatut(id: number, statut: StatutReclamation, reponseAgence?: string): import("@prisma/client").Prisma.Prisma__ReclamationClient<{
        id: number;
        description: string;
        agenceVoyageId: number;
        statut: import("@prisma/client").$Enums.StatutReclamation;
        reservationId: number;
        sujet: string;
        dateOuverture: Date;
        dateResolution: Date | null;
        reponseAgence: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__ReclamationClient<{
        id: number;
        description: string;
        agenceVoyageId: number;
        statut: import("@prisma/client").$Enums.StatutReclamation;
        reservationId: number;
        sujet: string;
        dateOuverture: Date;
        dateResolution: Date | null;
        reponseAgence: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
