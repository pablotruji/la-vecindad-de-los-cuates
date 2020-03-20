const seccionesPagina = new fullpage('#fullpage',{
    licenseKey: '519C3159-45DB46FE-ABF27203-B0A573F4',

    //Navegación
	menu: '#menu',
	lockAnchors: false,
	anchors:['pagina-1'],
	navigation: false,
	// navigationPosition: 'right',
	// navigationTooltips: ['inicio', '1', '2', '3', '4'],
	showActiveTooltip: true,
	slidesNavigation: false,
    slidesNavPosition: 'bottom',
	responsiveWidth: 200,
	loopBottom: false
});