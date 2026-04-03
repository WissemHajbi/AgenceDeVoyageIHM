import { PrismaService } from '../../prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
export declare class NotificationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateNotificationDto): import("@prisma/client").Prisma.Prisma__NotificationClient<{
        id: number;
        accountId: number;
        message: string;
        type: import("@prisma/client").$Enums.TypeNotification;
        dateEnvoi: Date;
        lu: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findByAccount(accountId: number): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        accountId: number;
        message: string;
        type: import("@prisma/client").$Enums.TypeNotification;
        dateEnvoi: Date;
        lu: boolean;
    }[]>;
    markAsRead(id: number): import("@prisma/client").Prisma.Prisma__NotificationClient<{
        id: number;
        accountId: number;
        message: string;
        type: import("@prisma/client").$Enums.TypeNotification;
        dateEnvoi: Date;
        lu: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__NotificationClient<{
        id: number;
        accountId: number;
        message: string;
        type: import("@prisma/client").$Enums.TypeNotification;
        dateEnvoi: Date;
        lu: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
