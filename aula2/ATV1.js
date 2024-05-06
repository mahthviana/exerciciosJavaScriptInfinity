let number = Number(prompt("Enter a number: "))

if(number > 0 && number % 2 == 0) {
    console.log(`The number ${number} is positive and even`)
}
else if (number < 0 && number % 2 == 0) {
    console.log(`the number ${number} is negative and even`)
}
else if(number > 0 && number % 2 == 1) {
    console.log(`The number ${number} is positive and odd`)
}
else {
    console.log(`The number ${number} is negative and odd`)
}