var windowsServer = 0;
var unix = 0;
var linux = 0;
var netware = 0;
var macOs = 0;
var outro = 0;

while(sistemaOperacional !== 0) {
  var sistemaOperacional = Number(prompt('Digite o número correspondente ao sistema operacional de sua preferência: \n 1 - Windows Server \n 2 - unix \n 3 - Linux \n 4 - Netware \n 5 - Mac OS \n 6 - outro \n 0 - fechar programa'));

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
let soma = windowsServer + unix + linux + netware + macOs + outro;

console.log(`Window Server - ${windowsServer} \n Unix - ${unix} \n linux - ${linux} \n Netware - ${netware} \n Mac OS - ${macOs} \n Outro - ${outro}`)

let votos = [windowsServer, unix, linux, netware, macOs, outro];

let percW = (windowsServer / soma) * 100 ; 
console.log(`Windows Server - ${percW.toFixed(2)}%`)

let percU = (unix / soma) * 100 ; 
console.log(`unix - ${percU.toFixed(2)}%`)

let percL = (linux / soma) * 100 ; 
console.log(`linux - ${percL.toFixed(2)}%`)

let percN = (netware / soma) * 100 ; 
console.log(`netware - ${percN.toFixed(2)}%`)

let percM = (macOs / soma) * 100 ; 
console.log(`macOs - ${percM.toFixed(2)}%`)

let percO = (outro / soma) * 100 ; 
console.log(`outro - ${percO.toFixed(2)}%`)


let sistemaMaisVotado = 'Windows Server';
let votosMaisVotado = windowsServer;

if (unix > votosMaisVotado) {
  sistemaMaisVotado = 'Unix';
  votosMaisVotado = unix;
}
if (linux > votosMaisVotado) {
  sistemaMaisVotado = 'Linux';
  votosMaisVotado = linux;
}
if (netware > votosMaisVotado) {
  sistemaMaisVotado = 'Netware';
  votosMaisVotado = netware;
}
if (macOs > votosMaisVotado) {
  sistemaMaisVotado = 'Mac OS';
  votosMaisVotado = macOs;
}
if (outro > votosMaisVotado) {
  sistemaMaisVotado = 'Outro';
  votosMaisVotado = outro;
}

console.log(`O sistema operacional mais votado foi: ${sistemaMaisVotado} com ${votosMaisVotado} votos.`);


