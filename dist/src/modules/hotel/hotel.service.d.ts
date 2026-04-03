import { PrismaService } from '../../prisma/prisma.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
export declare class HotelService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateHotelDto): import("@prisma/client").Prisma.Prisma__HotelClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        chambres: {
            id: number;
            numero: string;
            etage: number;
            prixParNuit: number;
            capacite: number;
            disponible: boolean;
            photos: string[];
            hotelId: number;
            typeChambreId: number;
        }[];
        offres: {
            id: number;
            description: string | null;
            hotelId: number;
            titre: string;
            tauxRemise: number;
            dateDebut: Date;
            dateFin: Date;
            active: boolean;
        }[];
    } & {
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
    })[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__HotelClient<({
        chambres: ({
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
        })[];
        offres: {
            id: number;
            description: string | null;
            hotelId: number;
            titre: string;
            tauxRemise: number;
            dateDebut: Date;
            dateFin: Date;
            active: boolean;
        }[];
    } & {
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
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, dto: UpdateHotelDto): import("@prisma/client").Prisma.Prisma__HotelClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__HotelClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
