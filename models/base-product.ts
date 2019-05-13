export interface BaseProduct {
    name: string;
    price: number;
    unit: 'kg' | 'l'
}

export enum ProductQuantityUnit {
    Kilogramy = 'kg',
    Litry = 'l'
}
