//alert ('Bom dia Madrinha linda!!');
var nomeUsuario = '';
var texto = document.querySelector ('span');

while(nomeUsuario == '')  { 
    nomeUsuario = prompt('Qual üe o seu nome?');
}

if (nomeUsuario == null)  {
    texto.textContent = 'Usuario';
 } else{ 

texto.textContent = nomeUsuario;

}