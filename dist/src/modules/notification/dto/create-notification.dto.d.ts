import { TypeNotification } from '@prisma/client';
export declare class CreateNotificationDto {
    accountId: number;
    message: string;
    type: TypeNotification;
}
