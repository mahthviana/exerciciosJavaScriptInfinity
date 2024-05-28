var telefone, local, moradia, dever, trabalho

telefone = prompt('telefonou para a vítima? ');
local = prompt('Esteve no local do crime?');
moradia = prompt("Mora perto da vítima?" );
dever = prompt("Devia para a vítima?" );
trabalho = prompt("Já trabalhou com a vítima?");

let respostas = [telefone, local, moradia, dever, trabalho];


var cont = 0;
for (item of respostas) {
  if(item === 's')  {
    cont+=1;
  }  
} 

if (cont == 2) {
  console.log('é suspeito');
}
else if (cont == 3 || cont == 4 ) {
  console.log('é cúmplice');
}
else if (cont == 5) {
  console.log('é assassino')
}
else {
  console.log('é inocente')
}
