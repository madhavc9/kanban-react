export interface Ticket {
    id: string;
    title: string;
    tag: string[];
    userId: string;
    status: string;
    priority: number;
};
// 21BCE3239
export interface User {
    id: string;
    name: string;
    available: boolean;
};
// 21BCE3239

export interface Col {
    col: Ticket[];
}
// 21BCE3239

export interface UserIdToData {
    userData: Record<string, User>;
}
// 21BCE3239