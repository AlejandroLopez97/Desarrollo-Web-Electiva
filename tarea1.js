//logical operator or

80 > 5 || 23 < 7; //true
22 < 3 || 130 > 256 //false

//ternary operator

let age = 60;
age > 59 ? console.log("Eres de la tercera edad") : console.log("No eres de la tercera de edad");

//else statement

const nota = 3.5;

if (nota >= 3.0){
    console.log("Has aprovado el curso");
}else{
    Console.log("no has aprovado el curso");
}

//logical operator and

"A" === "A" && "B" === "Z" //false

//switch statement

const year = 2023

switch (year){
    case 1995 :
        console.log("estas en el pasado");
        break;
    case 2056:
        console.log("Estas en el futuro");
        break;
    default:
        console.log("Disfruta el presente");
}

//if statement

const edad = 18;

if (edad >= 18){
    console.log("Eres mayor de edad en Colombia.");
}

//logical operator !

let aprobacion = true;
let noAprobacion = !aprobacion;

console.log(noAprobacion); //false

//comparison operators

let a = 14;

18 > 12 //true
90 < 23 //false
45 <= 43 //false
a === 14 //true
a === 'a'

//else if clause

let number = 8

if (number % 2 == 0){
    console.log("número es par");
} else if (numbre % 3 == 0){
    console.log("número divisible por 3");
}else{
    console.log("No es par ni multiplo de 3");
}

