import { User } from "./models";

export function generateHtmlNameList(arr: any[]): HTMLUListElement {
    let listEl = document.createElement('ul');

    arr.forEach(el => {
        let item = document.createElement('li');
        item.textContent = el.name;
        listEl.appendChild(item);
    })

    return listEl;

}