// var sistemaOperacional = Number(prompt('Digite o número correspondente ao sistema operacional correspondido: \n 1 - Windows Server \n 2 - unix \n 3 - Linux \n 4 - Netware \n 5 - Mac OS \n 6 - outro \n 0 - fechar programa'));

var windowsServer = 0;
var unix = 0;
var linux = 0;
var netware = 0;
var macOs = 0;
var outro = 0;

while(sistemaOperacional !== 0) {
  var sistemaOperacional = Number(prompt('Digite o número correspondente ao sistema operacional correspondido: \n 1 - Windows Server \n 2 - unix \n 3 - Linux \n 4 - Netware \n 5 - Mac OS \n 6 - outro \n 0 - fechar programa'));

  if (sistemaOperacional === 1) {
    windowsServer+=1
  }
  else if (sistemaOperacional === 2) {
    unix+=1
  }
  else if (sistemaOperacional === 3) {
    linux+=1
  }
  else if (sistemaOperacional === 4) {
    netware+=1
  }
  else if (sistemaOperacional === 5) {
    macOs+=1
  }
  else if (sistemaOperacional === 6) {
    outro+=1
  }
}

let votos = [windowsServer, unix, linux, netware, macOs, outro];

for (item of votos) {
  
}

console.log(`Window Server - ${windowsServer} \n Unix - ${unix} \n linux - ${linux} \n Netware - ${netware} \n Mac OS - ${macOs} \n Outro - ${outro}`)

