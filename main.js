//alert ('Bom dia Madrinha linda!!');
var nomeUsuario = '';
var texto = document.querySelector ('span');

while(nomeUsuario == '')  { 
    nomeUsuario = prompt('Qual üe o seu nome?');
}

texto.textContent = nomeUsuario;
