const botoes = document.querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-conteudo');


for (let sas = 0; sas < botoes.length; sas++) {

    botoes[sas].onclick = function () {
        
        for (let j = 0; j < botoes.length; j++) {
            console.log(j);
            botoes[j].classList.remove('ativo');
            textos[j].classList.remove('ativa');
        }
        botoes[sas].classList.add('ativo');
        textos[sas].classList.add('ativa');
    }
}

const contadores = document.querySelectorAll('.contador');
const tempoObjetivo1 = new Date ('2024-04-19T00:00:00');
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;


