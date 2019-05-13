export class Cart {

    private _items: any[] = [];
    constructor(public itemsLimit: number) {}

    add(item: any) {
        if(this._items.length < this.itemsLimit) {
            this._items.push(item);
        } else {
            console.log('Nie ma miejsc w koszyku');
        }
    }

    get items() {
        return this._items;
    }

}