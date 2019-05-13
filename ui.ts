const input = document.getElementById('myInput') as HTMLInputElement | null
if(input) {
    input.value = 'test';
input.addEventListener('keyup', ev => console.log(ev));
}