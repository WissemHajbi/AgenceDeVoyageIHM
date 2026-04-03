import { PrismaService } from '../../prisma/prisma.service';
import { CreateOffreDto } from './dto/create-offre.dto';
import { UpdateOffreDto } from './dto/update-offre.dto';
export declare class OffreService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateOffreDto): import("@prisma/client").Prisma.Prisma__OffreClient<{
        id: number;
        description: string | null;
        hotelId: number;
        titre: string;
        tauxRemise: number;
        dateDebut: Date;
        dateFin: Date;
        active: boolean;
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
        chambres: ({
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
            chambreId: number;
            offreId: number;
        })[];
    } & {
        id: number;
        description: string | null;
        hotelId: number;
        titre: string;
        tauxRemise: number;
        dateDebut: Date;
        dateFin: Date;
        active: boolean;
    })[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__OffreClient<({
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
        chambres: ({
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
            chambreId: number;
            offreId: number;
        })[];
    } & {
        id: number;
        description: string | null;
        hotelId: number;
        titre: string;
        tauxRemise: number;
        dateDebut: Date;
        dateFin: Date;
        active: boolean;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, dto: UpdateOffreDto): import("@prisma/client").Prisma.Prisma__OffreClient<{
        id: number;
        description: string | null;
        hotelId: number;
        titre: string;
        tauxRemise: number;
        dateDebut: Date;
        dateFin: Date;
        active: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__OffreClient<{
        id: number;
        description: string | null;
        hotelId: number;
        titre: string;
        tauxRemise: number;
        dateDebut: Date;
        dateFin: Date;
        active: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
