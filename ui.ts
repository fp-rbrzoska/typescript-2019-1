import { User } from "./models";
import { generateHtmlNameList } from "./utils";

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

document.body.appendChild(generateHtmlNameList(users));

if(input) {
    input.value = 'test';
input.addEventListener('keyup', ev => console.log(ev));
}