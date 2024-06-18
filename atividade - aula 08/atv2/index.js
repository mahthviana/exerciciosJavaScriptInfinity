const input = document.querySelector('#input');
const button = document.querySelector('#button');


button.addEventListener('click', (event) => {
  event.preventDefault();
  const inputValue = input.value;
  console.log(inputValue);

  if (inputValue !== "") {
    var p = document.createElement('p');
    p.innerText = inputValue;
    document.body.appendChild(p);
  }
})