let num1= prompt("digite o primeiro numero");
let num2= prompt("digite o segundo numero");
let num3= prompt("digite o terceiro numero");

if (num1==num2 && num2==num3){
console.log("o triangulo e equilatero");
}

else if (num1 !==num2 && num2!=num3 &&num3!= num1){
console.log("o triangulo e escaleno");
}
else{
console.log("o triangulo e isoceles");
}