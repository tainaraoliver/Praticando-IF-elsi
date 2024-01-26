let nota = prompt("Digite a sua nota de 0 a 100:");
if (nota < 0 || nota > 100) {
    console.log("Nota inválida. Por favor, insira uma nota de 0 a 100.");
}
else if (nota < 60) {
console.log("Reprovado:");
}
else if (nota <= 74) {
console.log("Regular:")

}
else if (nota <= 89) {
    console.log("Bom.");
}
else {
    console.log("Excelente.");
    }
