export type TelegramLoggedUser = {
    id: number;
    auth_date: number;
    first_name: string;
    last_name: string;
    username: string;
    hash: string;
    photo_url: string;
};

declare global {
    namespace globalThis {
        var onTelegramAuth: ((data: TelegramLoggedUser) => void) | undefined;
    }
}
