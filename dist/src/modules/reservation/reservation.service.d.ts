import { PrismaService } from '../../prisma/prisma.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { StatutReservation } from '@prisma/client';
export declare class ReservationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateReservationDto): import("@prisma/client").Prisma.Prisma__ReservationClient<{
        account: {
            email: string;
            motDePasse: string;
            actif: boolean;
            dateInscription: Date;
            id: number;
        };
        chambre: {
            id: number;
            numero: string;
            etage: number;
            prixParNuit: number;
            capacite: number;
            disponible: boolean;
            photos: string[];
            hotelId: number;
            typeChambreId: number;
        };
    } & {
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        account: {
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
        };
        chambre: {
            id: number;
            numero: string;
            etage: number;
            prixParNuit: number;
            capacite: number;
            disponible: boolean;
            photos: string[];
            hotelId: number;
            typeChambreId: number;
        };
    } & {
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
    })[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__ReservationClient<({
        account: {
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
        };
        chambre: {
            hotel: {
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
            };
            typeChambre: {
                id: number;
                description: string | null;
                libelle: string;
                superficieM2: number;
                equipements: string[];
            };
        } & {
            id: number;
            numero: string;
            etage: number;
            prixParNuit: number;
            capacite: number;
            disponible: boolean;
            photos: string[];
            hotelId: number;
            typeChambreId: number;
        };
        avis: {
            id: number;
            reservationId: number;
            note: number;
            commentaire: string | null;
            valide: boolean;
            datePublication: Date;
        }[];
        reclamations: {
            id: number;
            description: string;
            agenceVoyageId: number;
            statut: import("@prisma/client").$Enums.StatutReclamation;
            reservationId: number;
            sujet: string;
            dateOuverture: Date;
            dateResolution: Date | null;
            reponseAgence: string | null;
        }[];
    } & {
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
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findByAccount(accountId: number): import("@prisma/client").Prisma.PrismaPromise<({
        chambre: {
            hotel: {
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
            };
        } & {
            id: number;
            numero: string;
            etage: number;
            prixParNuit: number;
            capacite: number;
            disponible: boolean;
            photos: string[];
            hotelId: number;
            typeChambreId: number;
        };
    } & {
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
    })[]>;
    update(id: number, dto: UpdateReservationDto): import("@prisma/client").Prisma.Prisma__ReservationClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateStatut(id: number, statut: StatutReservation, motifBlocage?: string): import("@prisma/client").Prisma.Prisma__ReservationClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__ReservationClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
