let letra

letra = prompt("Digite uma letra e direi se é vogal ou não: ")

if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
    console.log(`Essa letra é uma vogal.`)
}
else if (letra == 'b' || letra == 'c' || letra == 'd' || letra == 'f' || letra == 'g' || letra == 'h' || letra == 'j' || letra == 'k' || letra == 'l' || letra == 'm' || letra == 'n' || letra == 'p' || letra == 'q' || letra == 'r' || letra == 's' || letra == 't' || letra == 'v' || letra == 'w' || letra == 'x' || letra == 'y' || letra == 'z') { 
    console.log(`Essa letra é uma consoante.`)
}
else {
    console.log(`Escreva um valor válido.`)
}