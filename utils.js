"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateHtmlNameList(arr) {
    var listEl = document.createElement('ul');
    arr.forEach(function (el) {
        var item = document.createElement('li');
        item.textContent = el.name;
        listEl.appendChild(item);
    });
    return listEl;
}
exports.generateHtmlNameList = generateHtmlNameList;
