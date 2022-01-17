import Dexie, { Table } from 'dexie';

export interface Laptop {
    id?: number;
    ua: string;
}

export interface Mobile {
    id?: number;
    ua: string;
}

export interface Whitelist {
    id?: number;
    address: string;
}

export class MySubClassedDexie extends Dexie {
    laptop!: Table<Laptop>;
    mobile!: Table<Mobile>;
    whitelist!: Table<Whitelist>;

    constructor() {
        super('views3');
        this.version(1).stores({
            laptop: '++id, ua',
            mobile: '++id, ua'
        });
    }
}

export const db = new MySubClassedDexie();