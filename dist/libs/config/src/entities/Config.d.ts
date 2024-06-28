export default class Config {
    key: string;
    name: string;
    value: string;
    type: string | null;
    order: number | null;
    isSystem: number | null;
    createdBy: number | null;
    createdAt: string | Date;
}
