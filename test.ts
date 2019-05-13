let num: number = 1;
let bool: boolean = true;
let str: string = 'str';
let und: undefined = undefined;
let n: null = null;
let u: unknown;
let nev: never;
let strArr: string[];
let numArr: number[];
let costamcostam;
costamcostam = 'str';
costamcostam = 2;

interface User {
    name: string;
    age: number;
    secondName?: string;
}

type NumberOrString = number | string;
let nos: NumberOrString = 1;
nos = 'jeden';

let user: User = {
    name: 'Alojzy',
    age: 65
}

function countItems(arr: any[]) {
    return arr.length;
}