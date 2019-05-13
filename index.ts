interface Product {
    name: string;
    price: number;
    unit: string;
    description: string;
}

let product: Product = {
    name: 'Marchewka',
    price: 9.99,
    unit: 'kg',
    description: 'Świeżutka marchewka'
    }
    
    let cart: Product[] = [];
    cart.push(product);
    
    function buyProduct(prod: Product, quantity: number): number {
      return prod.price * quantity
    }
    