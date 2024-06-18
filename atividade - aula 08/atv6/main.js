
const input = document.querySelector('#input')
const button = document.querySelector('#button')
let ul = document.querySelector('#ul')

button.addEventListener('click', (event) => {
    event.preventDefault()
    if (input !== "") {
        var inputValue = input.value.trim()
        var li = document.querySelector('#item')
        li.innerHTML = inputValue
    }
})