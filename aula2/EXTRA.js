let triArea, retArea, cuboVol, circArea, opcao
var b, h, r

triArea = (b*h)/2
retArea = b*h
cuboVol = b**3
circArea = 3,14*( r**2)

opcao = prompt("escolha um número: \n 1. Calcular área do Triângulo \n 2. Calcular área do Retângulo \n 3. Calcular volume do Cubo \n 4. Calcular área do Círculo \n 5. Sair")

if (opcao == 1) {
    b = Float(prompt("Digite o valor da base: "))
    h = Float(prompt("Digite o valor da altura: "))
    console.log(`A área do triângulo é: ${triArea}`)
}
else if (opcao == 2) {
    b = Float(prompt("Digite o valor da base: "))
    h = Float(prompt("Digite o valor da altura: "))
    console.log(`A área do retângulo é: ${retArea}`)
}
else if (opcao == 3) {
    b = Float(prompt("Digite o valor da base: "))
    console.log(`O  volume do cubo é: ${cuboVol}`)
}
else if (opcao == 4) {
    r = Float(prompt("Digite o valor do raio da circunferência: "))
    console.log(`A área da circunferência é: ${circArea}`)
}
else if (opcao == 5) {
    console.log(`Você saiu do serviço.`)
}
else {
    console.log(`Tente novamente e digite um valor válido. `)    
}




// Essa versão abaixo não consegui resolver aí deixei a versão acima para funcionar mesmo sem validar tudo corretamente. Sei que não é a maneira ideal, mas para esse exercício deixei dessa maneira

// while (opcao != 1 || opcao != 2 || opcao != 3 || opcao != 4 || opcao != 5) {
//     opcao = prompt("escolha um número: \n 1. Calcular área do Triângulo \n 2. Calcular área do Retângulo \n 3. Calcular volume do Cubo \n 4. Calcular área do Círculo \n 5. Sair")
//     if (opcao == 1) {
//         b = Float(prompt("Digite o valor da base: "))
//         h = Float(prompt("Digite o valor da altura: "))
//         console.log(`A área do triângulo é: ${triArea}`)
//     }
//     else if (opcao == 2) {
//         b = Float(prompt("Digite o valor da base: "))
//         h = Float(prompt("Digite o valor da altura: "))
//         console.log(`A área do retângulo é: ${retArea}`)
//     }
//     else if (opcao == 3) {
//         b = Float(prompt("Digite o valor da base: "))
//         console.log(`O  volume do cubo é: ${cuboVol}`)
//     }
//     else if (opcao == 4) {
//         r = Float(prompt("Digite o valor do raio da circunferência: "))
//         console.log(`A área da circunferência é: ${circArea}`)
//     }
//     else if (opcao == 5) {
//         console.log(`Você saiu do serviço.`)
//     }
//     else {
//         console.log(`Tente novamente e digite um valor válido. `)    
//     }
// }