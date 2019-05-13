import { BaseProduct } from "./models/base-product";

export class Cart<T extends BaseProduct> {

    private _items: T[] = [];
    constructor(public itemsLimit: number) {}

    add(item: T): void {
        if(this._items.length < this.itemsLimit) {
            this._items.push(item);
        } else {
            console.log('Nie ma miejsc w koszyku');
        }
    }

    get items(): T[] {
        return this._items;
    }

}