import { BaseProduct, ProductQuantityUnit } from "./base-product";

export interface Product extends BaseProduct {
    description: string;
}