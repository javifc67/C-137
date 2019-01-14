var miTitulo = document.querySelector('h1');
miTitulo.innerHTML = 'Dimensión C-137';

var miBoton=document.querySelector('button');
var miTitulo=document.querySelector('h3');

function estableceNombreUsuario(){
	var miNombre=prompt('Cómo es tu nombre?');
	localStorage.setItem('nombre', miNombre);
	miTitulo.textContent='Bienvenido a tu dimensión, ' +miNombre;
}
if (!localStorage.getItem('nombre')) {
	estableceNombreUsuario();
}
else{
	var nombreAlmacenado=localStorage.getItem('nombre');
	miTitulo.textContent='Bienvenido a tu dimensión, '+nombreAlmacenado;
}
miBoton.onclick=function(){
	estableceNombreUsuario();
}