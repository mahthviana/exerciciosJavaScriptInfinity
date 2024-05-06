let numero

numero = Number(prompt("Digite um número e irei determinar se é um número primo: "))

if (numero % numero == 0 && numero % 1 == 0) {
    console.log(`Esse número é primo`)
}
else if (numero % numero == 0 && numero % 1 != 0) {
    console.log(`Esse número não é primo`)
}
else {
    console.log(`Digite um valor que seja válido`)
}

