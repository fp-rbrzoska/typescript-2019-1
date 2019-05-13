"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newUser = {
    age: 64,
    name: 'Tomasz',
};
var product = {
    name: 'Marchewka',
    price: 9.99,
    unit: 'kg',
    description: 'Świeżutka marchewka'
};
var myVar;
var cart = [];
cart.push(product);
function buyProduct(prod, quantity) {
    return prod.price * quantity;
}
