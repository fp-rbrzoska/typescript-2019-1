"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this._items = [];
        this.items = [];
    }
    Cart.prototype.add = function (item) {
        this._items.push(item);
    };
    return Cart;
}());
exports.Cart = Cart;
