const button = document.getElementById ('myButton');
const myInput = document.getElementById ('myInput');
const myInput2 = document.getElementById ('myInput2');
const myH = document.getElementById ('myName');


function buttonClick(){
    let value = myInput.value;
    let value2 = myInput2.value
    console.log(value);
    console.log(value2);
    myH.innerText = `Hello, ${value} ${value2}`;
}