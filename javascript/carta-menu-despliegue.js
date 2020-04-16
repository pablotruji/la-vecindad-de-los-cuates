const showCartaMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
             nav = document.getElementById(navId)
    
    
        toggle.addEventListener('click', () => {
            nav.classList.toggle('showMenu')
        })
}
showCartaMenu('despliegue-carta-menu', 'nav-carta-menu');