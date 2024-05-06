let valorHora, hora, salarioBruto, IR, INSS, sindicato, salarioLiquido, descontos

valorHora = Number(prompt("ganho por hora: "))
hora = Number(prompt("Horas trabalhadas: "))

salarioBruto = valorHora * hora

IR = salarioBruto * 0.11
INSS = salarioBruto * 0.08
sindicato = salarioBruto * 0.05

descontos = IR + INSS + sindicato

salarioLiquido = salarioBruto - IR - INSS - sindicato

console.log(`O salário bruto é de R$${salarioBruto.toFixed(2)}`)
console.log(`O valor pago ao INSS é de R$${INSS.toFixed(2)}`)
console.log(`O valor pago ao sindicato é de R$${sindicato.toFixed(2)}`)
console.log(`O valor total gastos em descontos é de R$${descontos.toFixed(2)} `)
console.log(`O seu salário líquido é de R$${parseFloat(salarioLiquido.toFixed(2))}`)
