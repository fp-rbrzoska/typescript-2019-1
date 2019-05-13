"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var input = document.getElementById('myInput');
var users = [
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
];
document.body.appendChild(utils_1.generateHtmlNameList(users));
if (input) {
    input.value = 'test';
    input.addEventListener('keyup', function (ev) { return console.log(ev); });
}
