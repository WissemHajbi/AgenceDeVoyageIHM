import { PrismaService } from '../../prisma/prisma.service';
import { CreateChambreDto } from './dto/create-chambre.dto';
import { UpdateChambreDto } from './dto/update-chambre.dto';
export declare class ChambreService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateChambreDto): import("@prisma/client").Prisma.Prisma__ChambreClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
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
    })[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__ChambreClient<({
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
        reservations: {
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
        }[];
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
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findByHotel(hotelId: number): import("@prisma/client").Prisma.PrismaPromise<({
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
    })[]>;
    update(id: number, dto: UpdateChambreDto): import("@prisma/client").Prisma.Prisma__ChambreClient<{
        id: number;
        numero: string;
        etage: number;
        prixParNuit: number;
        capacite: number;
        disponible: boolean;
        photos: string[];
        hotelId: number;
        typeChambreId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__ChambreClient<{
        id: number;
        numero: string;
        etage: number;
        prixParNuit: number;
        capacite: number;
        disponible: boolean;
        photos: string[];
        hotelId: number;
        typeChambreId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
