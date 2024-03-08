//alert ('Bom dia Madrinha linda!!');
var nomeUsuario = prompt('');
var texto = document.querySelector ('span');

texto.textContent = nomeUsuario;

while(nomeUsuario == '')  { 
    nomeUsuario = prompt('Qual üe o seu nome?');
}
