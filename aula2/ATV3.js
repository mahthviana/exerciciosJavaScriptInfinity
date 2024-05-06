let produto, preco, idade, desconto


produto = prompt("Digite o produto: ")
preco = prompt("Digite o valo do produto: ")
idade = prompt("Digite sua idade: ")
desconto = preco * 0.10

if (idade < 18) {
    console.log(`Sua idade é ${idade} e o valor do produto ${produto} com o desconto de 10% é de ${desconto}`)
}
else {
    console.log(`Sua idade é ${idade} e não terá desconto`)
}