const seccionesPagina = new fullpage('#fullpage',{
    licenseKey: '519C3159-45DB46FE-ABF27203-B0A573F4',

    menu: '#menu',
    lockAnchors: false,
    anchors:['firstPage', 'SecondPage'],
    navigation: false,
	showActiveTooltip: true,
	slidesNavigation: false,
    slidesNavPosition: 'bottom',
	responsiveWidth: 200,
    loopBottom: false,
    loopHorizontal: false,
    fitToSection: false,
});

fullpage_api.setAutoScrolling(false);