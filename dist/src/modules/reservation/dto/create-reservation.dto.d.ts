import { StatutReservation } from '@prisma/client';
export declare class CreateReservationDto {
    accountId: number;
    chambreId: number;
    dateArrivee: string;
    dateDepart: string;
    nombrePersonnes: number;
    nombreNuits: number;
    montantTotal: number;
    codeConfirmation: string;
    statut?: StatutReservation;
    motifBlocage?: string;
}
