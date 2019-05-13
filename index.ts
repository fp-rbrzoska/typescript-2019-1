import { user } from "./test";
import { User, Product } from "./models";

let newUser: User = {
  age: 64,
  name: 'Tomasz',
}


let product: Product = {
    name: 'Marchewka',
    price: 9.99,
    unit: 'kg',
    description: 'Świeżutka marchewka'
    }
    
let myVar;

let cart: Product[] = [];
cart.push(product);
    
    function buyProduct(prod: Product, quantity: number): number {
      return prod.price * quantity
    }
