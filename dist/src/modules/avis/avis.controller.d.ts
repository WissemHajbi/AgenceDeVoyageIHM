import { AvisService } from './avis.service';
import { CreateAvisDto } from './dto/create-avis.dto';
import { UpdateAvisDto } from './dto/update-avis.dto';
export declare class AvisController {
    private readonly avisService;
    constructor(avisService: AvisService);
    create(dto: CreateAvisDto): import("@prisma/client").Prisma.Prisma__AvisClient<{
        id: number;
        reservationId: number;
        note: number;
        commentaire: string | null;
        valide: boolean;
        datePublication: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
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
        reservationId: number;
        note: number;
        commentaire: string | null;
        valide: boolean;
        datePublication: Date;
    })[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__AvisClient<({
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
        reservationId: number;
        note: number;
        commentaire: string | null;
        valide: boolean;
        datePublication: Date;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, dto: UpdateAvisDto): import("@prisma/client").Prisma.Prisma__AvisClient<{
        id: number;
        reservationId: number;
        note: number;
        commentaire: string | null;
        valide: boolean;
        datePublication: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__AvisClient<{
        id: number;
        reservationId: number;
        note: number;
        commentaire: string | null;
        valide: boolean;
        datePublication: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
