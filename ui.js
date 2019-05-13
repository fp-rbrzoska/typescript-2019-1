"use strict";
var input = document.getElementById('myInput');
if (input) {
    input.value = 'test';
    input.addEventListener('keyup', function (ev) { return console.log(ev); });
}
