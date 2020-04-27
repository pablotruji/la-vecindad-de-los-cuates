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
var menuEscritorio = document.getElementById("nav-carta-menu-escritorio");
var menuMovil = document.getElementById("nav-carta-menu-movil");
var oscurecer = document.getElementById("oscurecer-pantalla");

function showHide(e){
    e.preventDefault();
    e.stopPropagation();
    if(menuEscritorio.classList.contains("showMenu") || menuMovil.classList.contains("showMenu")){
        menuEscritorio.classList.remove("showMenu");
        menuMovil.classList.remove("showMenu");
        oscurecer.classList.remove("oscurecer-pantalla");
        // console.log("No tiene");
    }else{
        menuEscritorio.classList.add("showMenu");
        menuMovil.classList.add("showMenu");
        oscurecer.classList.add("oscurecer-pantalla");
        // console.log("tiene");
    }
}   

despliegueEscritorio.addEventListener("click", showHide, false);
despliegueMovil.addEventListener("click", showHide, false);
       
document.addEventListener("click", function(e){
    var clic = e.target;
    // console.log("clic");
    if((menuEscritorio.classList.contains("showMenu") || menuMovil.classList.contains("showMenu")) && (clic != menuEscritorio || clic != menuMovil)){
        menuEscritorio.classList.remove("showMenu");
        menuMovil.classList.remove("showMenu");
        oscurecer.classList.remove("oscurecer-pantalla");
    }
}, false);

/*
function showHide(e){
    e.preventDefault();
    e.stopPropagation();
    if(menuMovil.classList.contains("showMenu")){
        menuMovil.classList.remove("showMenu");
        oscurecer.classList.remove("oscurecer-pantalla");
        console.log("No tiene");
    }else{
        menuMovil.classList.add("showMenu");
        oscurecer.classList.add("oscurecer-pantalla");
        console.log("tiene");
    }
}   

despliegueMovil.addEventListener("click", showHide, false);
       
document.addEventListener("click", function(e){
    var clic = e.target;
    console.log("clic");
    if(menuMovil.classList.contains("showMenu") && clic != menuMovil){
        menuMovil.classList.remove("showMenu");
        oscurecer.classList.remove("oscurecer-pantalla");
    }
}, false);*/
