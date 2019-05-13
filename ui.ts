import { User, Product } from "./models";
import { generateHtmlNameList } from "./utils";
import { Cart } from "./cart";
import $ from 'jquery';
import {concat} from 'lodash';


const input = document.getElementById('myInput') as HTMLInputElement | null

const users: User[] = [
    {
        name: 'User 1',
        age: 25
    },
    {
        name: 'User 2',
        age: 35
    },
    {
        name: 'User 3',
        age: 45
    }
]
const jQueryButton = $('#addButton');
const button = document.getElementById('addButton') as HTMLButtonElement | null;
const cartContainer = document.getElementById('cartContainer') as HTMLDivElement | null;
const cart = new Cart<Product>(5);
if(button) {
    button.addEventListener('click', () => {
        if(input) {
            cart.add(
                { 
                    description: 'Descr',
                    price: 10,
                    unit: 'kg',
                    name: input.value 
                } );
            if(cartContainer) {
                cartContainer.innerHTML = '';
                cartContainer.appendChild(generateHtmlNameList(cart.items))
            }
            input.value = ''
        }
    })
}





document.body.appendChild(generateHtmlNameList(users));

if(input) {
input.addEventListener('keyup', ev => console.log(ev));
}