import { User, Product } from "./models";

export function generateHtmlNameList(arr: any[]): HTMLUListElement {
    let listEl = document.createElement('ul');

    arr.forEach(el => {
        let item = document.createElement('li');
        item.textContent = el.name;
        listEl.appendChild(item);
    })

    return listEl;
}

function reverse(val: Product | User){
    if(isProduct(val)) {
    } 
    else {
    }
}

function isProduct(val: Product | User | string): val is Product {
    return (<Product>val).description !== undefined;
  }
  