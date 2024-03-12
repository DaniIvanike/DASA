let numeroSecreto = Math.random() * 10;
console.log (numeroSecreto);

let chute = prompt ('Escolha um número entre 0 a 10.');

while(chute == null || chute != numeroSecreto){
    alert('Tenta de novo arrombado :)');
    chute = prompt ('Escolha um número entre 0 a 10.');
}

if(numeroSecreto == chute){
      alert('Parabéns!!! Você acertou :)');
      console.log('Parabéns, acertou mizera');
} else{
    alert('Errou infeliz >:(');
      console.log('Infelizmente você falhou');
}
