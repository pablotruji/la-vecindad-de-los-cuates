/*const showMenuPrincipal = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
             nav = document.getElementById(navId)


        toggle.addEventListener('click', () => {
            nav.classList.toggle('showMenu')
        })
}
showMenuPrincipal('despliegue-carta-menu', 'nav-carta-menu');
*/
var despliegueEscritorio = document.getElementById("despliegue-carta-menu-escritorio")
var despliegueMovil = document.getElementById("despliegue-carta-menu-movil");
var menu = document.getElementById("nav-carta-menu");
var oscurecer = document.getElementById("oscurecer-pantalla");

function showHide(e){
    e.preventDefault();
    e.stopPropagation();
    if(menu.classList.contains("showMenu")){
        menu.classList.remove("showMenu");
        oscurecer.classList.remove("oscurecer-pantalla");
        console.log("No tiene");
    }else{
        menu.classList.add("showMenu");
        oscurecer.classList.add("oscurecer-pantalla");
        console.log("tiene");
    }
}   

despliegueEscritorio.addEventListener("click", showHide, false);
despliegueMovil.addEventListener("click", showHide, false);
       
document.addEventListener("click", function(e){
    var clic = e.target;
    console.log("clic");
    if(menu.classList.contains("showMenu") && clic != menu){
        menu.classList.remove("showMenu");
        oscurecer.classList.remove("oscurecer-pantalla");
    }
}, false);
