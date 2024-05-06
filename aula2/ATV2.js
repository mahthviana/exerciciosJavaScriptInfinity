let peso, altura, imc, alturaMetros

peso = prompt("Escreva qual o seu peso em KG: ")
altura = prompt("Escreva qual a sua altura em cm: ")
alturaMetros = altura/100

imc = peso/(alturaMetros*alturaMetros)

console.log(`Seu IMC é ${imc.toFixed(2)}`)

switch (imc) {
    case imc <= 16.9:
        console.log(`Muito abaixo do peso.`)
        break;
    case imc >= 17 && imc <= 18.4:
        console.log(`Abaixo do peso.`)
        break;
    case imc >=18.5 && imc <= 24.9:
        console.log(`Peso normal.`)
        break; 
    case imc >= 25 && imc <= 29.9:
        console.log(`Acima do peso`)
        break;
    case imc >= 30 && imc <= 34.9:
        console.log(`Obesidade grau I`)
        break;
    case imc >= 35 && imc <= 40:
        console.log(`Obesidade grau II`)
        break;
    case imc > 40:
        console.log(`Obesidade grau III`)
        break;
}