const showCartaMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
             nav = document.getElementById(navId)
    
    
        toggle.addEventListener('click', () => {
            nav.classList.toggle('showMenu')
        })
}
showCartaMenu('despliegue-carta-menu', 'nav-carta-menu');

/*const showCartaMenuMovil = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
             nav = document.getElementById(navId)
    
    
        toggle.addEventListener('click', () => {
            nav.classList.toggle('showMenu')
        })
}
showCartaMenu('despliegue-carta-menu-movil', 'nav-carta-menu');
*/

//almacenando el div y el boton en unas variables
var div = document.getElementById('menu');
var but = document.getElementById('boton');

//la funcion que oculta y muestra
function showHide(e){
e.preventDefault();
e.stopPropagation();
if(div.style.display == "none"){
div.style.display = "block";
} else if(div.style.display == "block"){
div.style.display = "none";
}
}
//al hacer click en el boton
but.addEventListener("click", showHide, false);

//funcion para cualquier clic en el documento
document.addEventListener("click", function(e){

//obtiendo informacion del DOM para  
var clic = e.target;

if(div.style.display == "block" && clic != div){
 div.style.display = "none";
}
}, false);