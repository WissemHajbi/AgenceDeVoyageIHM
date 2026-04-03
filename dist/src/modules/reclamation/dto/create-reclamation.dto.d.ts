import { StatutReclamation } from '@prisma/client';
export declare class CreateReclamationDto {
    reservationId: number;
    agenceVoyageId: number;
    sujet: string;
    description: string;
    statut?: StatutReclamation;
}
