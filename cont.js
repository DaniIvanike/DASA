const botoes = document.querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-conteudo');


for (let sas = 0; sas < botoes.length; sas++) {

    botoes[sas].onclick = function () {
        console.log(sas);
        for (let j = 0; j < botoes.length; j++) {
            console.log(j);
            botoes[j].classList.remove('ativo');
        }
        botoes[sas].classList.add('ativo');
        textos[sas].classList.add('ativa');
    }
}

