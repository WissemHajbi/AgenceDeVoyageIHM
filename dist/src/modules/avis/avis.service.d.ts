import { PrismaService } from '../../prisma/prisma.service';
import { CreateAvisDto } from './dto/create-avis.dto';
import { UpdateAvisDto } from './dto/update-avis.dto';
export declare class AvisService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateAvisDto): import("@prisma/client").Prisma.Prisma__AvisClient<{
        id: number;
        reservationId: number;
        note: number;
        commentaire: string | null;
        datePublication: Date;
        valide: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
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
        reservationId: number;
        note: number;
        commentaire: string | null;
        datePublication: Date;
        valide: boolean;
    })[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__AvisClient<({
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
        reservationId: number;
        note: number;
        commentaire: string | null;
        datePublication: Date;
        valide: boolean;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findByReservation(reservationId: number): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        reservationId: number;
        note: number;
        commentaire: string | null;
        datePublication: Date;
        valide: boolean;
    }[]>;
    update(id: number, dto: UpdateAvisDto): import("@prisma/client").Prisma.Prisma__AvisClient<{
        id: number;
        reservationId: number;
        note: number;
        commentaire: string | null;
        datePublication: Date;
        valide: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__AvisClient<{
        id: number;
        reservationId: number;
        note: number;
        commentaire: string | null;
        datePublication: Date;
        valide: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
