var background = document.getElementById('background-slide');
var clasesBackground = ['slide-1-background','slide-2-background', 'slide-3-background','slide-4-ensaladas-background',
'slide-4-tacos-background','slide-5-background','slide-6-background','slide-7-background','slide-8-background','slide-9-background',
'slide-10-background','slide-11-background','slide-12-background','slide-13-background', 'slide-14-background',
'slide-15-background'];

var background_pa_compartir = document.getElementsByClassName('background-pa-compartir');
var background_pa_entrarle_solito = document.getElementsByClassName('background-pa-entrarle-solito');
var background_sopas = document.querySelector('.background-sopas');
var background_ensaladas = document.querySelector('.background-ensaladas');
var background_tacos = document.querySelector('.background-tacos');
var background_mero_mero = document.getElementsByClassName('background-mero-mero');
var background_las_estrellas = document.querySelector('.background-las-estrellas');
var background_lo_mejor = document.getElementsByClassName('background-lo-mejor')
var background_pio_pio = document.querySelector('.background-pio-pio');
var background_el_puerco = document.querySelector('.background-el-puerco');
var background_mariscos = document.querySelector('.background-mariscos');
var background_infantil_extras = document.querySelector('.background-infantil-extras');
var background_postres = document.querySelector('.background-postres');
var background_bebidas = document.querySelector('.background-bebidas');
var background_cocteles = document.querySelector('.background-cocteles');
var background_licores = document.querySelector('.background-licores');

const seccionesPagina = new fullpage('#fullpage',{
	
    licenseKey: '519C3159-45DB46FE-ABF27203-B0A573F4',

    //Navegación
	menu: '#menu',
	lockAnchors: false,
	anchors:['pagina', 'footer'],
	navigation: false,
	showActiveTooltip: true,
	slidesNavigation: false,
	loopBottom: false,
	onLeave: function (section, origin, destination, direction){
		
		if(section.anchor == 'pagina'){
			for(i = 0; i < 2; i++){
				background_pa_compartir[i].style.backgroundImage = 'none';
				background_pa_entrarle_solito[i].style.backgroundImage = 'none';
				background_mero_mero[i].style.backgroundImage = 'none';
				background_lo_mejor[i].style.backgroundImage = 'none';
			}
			background_sopas.style.backgroundImage = 'none';
			background_ensaladas.style.backgroundImage = 'none';
			background_tacos.style.backgroundImage = 'none';
			background_las_estrellas.style.backgroundImage = 'none';
			background_pio_pio.style.backgroundImage = 'none';
			background_el_puerco.style.backgroundImage = 'none';
			background_mariscos.style.backgroundImage = 'none';
			background_infantil_extras.style.backgroundImage = 'none';
			background_postres.style.backgroundImage = 'none';
			background_licores.style.backgroundImage = 'none';
			background_bebidas.style.backgroundImage = 'none';
			background_cocteles.style.backgroundImage = 'none';
		}
	},
	afterLoad: function (section, origin, destination, direction){
		if (section.anchor == 'footer'){
			for(i = 0; i < 2; i++){
				background_pa_compartir[i].style.backgroundImage = "url('./imagenes/Imagenes-menu/Pa-compartir/Fondo-pa-compartir-escritorio.png')";
				background_pa_entrarle_solito[i].style.backgroundImage = "url('./imagenes/Imagenes-menu/Pa-entrarle-solito/fondo-pa-entrarle-solito-escritorio-1.png')";
				background_mero_mero[i].style.backgroundImage = "url('./imagenes/Imagenes-menu/Meros-Mexicanos/Fondo-los-mero-mero-escritorio-1.png')";
				background_lo_mejor[i].style.backgroundImage = "url('./imagenes/Imagenes-menu/Nuestro-ganado/Background-nuestro-ganado-escritorio-2.png')";
			}
			background_sopas.style.backgroundImage = "url('./imagenes/Imagenes-menu/Sopas/fondo-sopas-escritorio.png')";
			background_ensaladas.style.backgroundImage = "url('./imagenes/Imagenes-menu/Ensaladas/Background-ensaladas-escritorio.png')";
			background_tacos.style.backgroundImage = "url('./imagenes/Imagenes-menu/Tacos/Background-tacos-escritorio.png')";
			background_las_estrellas.style.backgroundImage = "url('./imagenes/Imagenes-menu/Las-Estrellas/Background-las-estrellas-escritorio-1.png')";
			background_pio_pio.style.backgroundImage = "url('./imagenes/Imagenes-menu/Pechugas-pio-pio/Background-pechugas-pio-pio-escritorio.png')";
			background_el_puerco.style.backgroundImage = "url('./imagenes/Imagenes-menu/Y-el-puerco/Background-y-el-puerco-escritorio.png')";
			background_mariscos.style.backgroundImage = "url('./imagenes/Imagenes-menu/Mariscos/Background-mariscos-escritorio.png')";
			background_infantil_extras.style.backgroundImage = "url('./imagenes/Imagenes-menu/Menu-Infantil/Background-infantil-extras-escritorio.png')";
			background_postres.style.backgroundImage = "url('./imagenes/Imagenes-menu/Postres/Background-postres-escritorio.png')";
			background_bebidas.style.backgroundImage = "url('./imagenes/Imagenes-menu/Bebidas/Background-bebidas-escritorios.png')";
			background_licores.style.backgroundImage = "url('./imagenes/Imagenes-menu/Licores-botellas/Background-licores-escritorio.png')";
			background_cocteles.style.backgroundImage = "url('./imagenes/Imagenes-menu/Cocteles/Background-cocteles-escritorio.png')";
		}
	},
	afterSlideLoad: function( section, origin, destination, direction){
		var loadedSlide = this;

			if(section.anchor == 'pagina' && (destination.index == 0 || destination.index == 1)){
				background.style.backgroundImage = "url('./imagenes/Imagenes-menu/Pa-compartir/Fondo-pa-compartir-escritorio.png')";
			}
			if(section.anchor == 'pagina' && (destination.index == 2 || destination.index == 3)){
				background.style.backgroundImage = "url('./imagenes/Imagenes-menu/Pa-entrarle-solito/fondo-pa-entrarle-solito-escritorio-1.png')";
			}
			if(section.anchor == 'pagina' && destination.index == 4){
				background.style.backgroundImage = "url('./imagenes/Imagenes-menu/Sopas/fondo-sopas-escritorio.png')";
			}
			if(section.anchor == 'pagina' && destination.index == 5){
				background.style.backgroundImage = "url('./imagenes/Imagenes-menu/Ensaladas/Background-ensaladas-escritorio.png')";
			}
			if(section.anchor == 'pagina' && destination.index == 6){
				background.style.backgroundImage = "url('./imagenes/Imagenes-menu/Tacos/Background-tacos-escritorio.png')";
			}
			if(section.anchor == 'pagina' && (destination.index == 7 || destination.index == 8)){
				background.style.backgroundImage = "url('./imagenes/Imagenes-menu/Meros-Mexicanos/Fondo-los-mero-mero-escritorio-1.png')";
			}
			if(section.anchor == 'pagina' && destination.index == 9){
				background.style.backgroundImage = "url('./imagenes/Imagenes-menu/Las-Estrellas/Background-las-estrellas-escritorio-1.png')";
			}
			if(section.anchor == 'pagina' && (destination.index == 10 || destination.index == 11)){
				background.style.backgroundImage = "url('./imagenes/Imagenes-menu/Nuestro-ganado/Background-nuestro-ganado-escritorio-2.png')";
			}
			if(section.anchor == 'pagina' && destination.index == 12 ){
				background.style.backgroundImage = "url('./imagenes/Imagenes-menu/Pechugas-pio-pio/Background-pechugas-pio-pio-escritorio.png')";
			}
			if(section.anchor == 'pagina' && destination.index == 13){
				background.style.backgroundImage = "url('./imagenes/Imagenes-menu/Y-el-puerco/Background-y-el-puerco-escritorio.png')";
			}
			if(section.anchor == 'pagina' && destination.index == 14){
				background.style.backgroundImage = "url('./imagenes/Imagenes-menu/Mariscos/Background-mariscos-escritorio.png')";
			}
			if(section.anchor == 'pagina' && destination.index == 15){
				background.style.backgroundImage = "url('./imagenes/Imagenes-menu/Menu-Infantil/Background-infantil-extras-escritorio.png')";
			}
			if(section.anchor == 'pagina' && destination.index == 16){
				background.style.backgroundImage = "url('./imagenes/Imagenes-menu/Postres/Background-postres-escritorio.png')";
			}
			if(section.anchor == 'pagina' && destination.index == 17){
				background.style.backgroundImage = "url('./imagenes/Imagenes-menu/Cocteles/Background-cocteles-escritorio.png')";
			}
			if(section.anchor == 'pagina' && destination.index == 18){
				background.style.backgroundImage = "url('./imagenes/Imagenes-menu/Bebidas/Background-bebidas-escritorios.png')";
			}
			if(section.anchor == 'pagina' && destination.index == 19){
				background.style.backgroundImage = "url('./imagenes/Imagenes-menu/Licores-botellas/Background-licores-escritorio.png')";
			}
			 //first slide of the second section
			 /*
			 switch (destination.index) {
				case 0:
				case 1:
					background.classList.add(clasesBackground[0]);
					background.classList.remove(clasesBackground[1], clasesBackground[15]);
				break;
				case 2:
				case 3:
					background.classList.add(clasesBackground[1]);
					background.classList.remove(clasesBackground[0],clasesBackground[2]);	
				break;

				case 4:
					background.classList.add(clasesBackground[2]);
					background.classList.remove(clasesBackground[1],clasesBackground[3]);				
				break;
				case 5:
					background.classList.add(clasesBackground[3]);
					background.classList.remove(clasesBackground[2],clasesBackground[4]);				
				break;
				case 6:
					background.classList.add(clasesBackground[4]);
					background.classList.remove(clasesBackground[3],clasesBackground[5]);				
				break;
				case 7:
				case 8:
				    background.classList.add(clasesBackground[5]);
				    background.classList.remove(clasesBackground[4],clasesBackground[6]);			
				break;
				case 9:
				    background.classList.add(clasesBackground[6]);
				    background.classList.remove(clasesBackground[5],clasesBackground[7]);			
				break;
				case 10:
				case 11:
				    background.classList.add(clasesBackground[7]);
				    background.classList.remove(clasesBackground[6],clasesBackground[8]);			
				break;
				case 12:
				    background.classList.add(clasesBackground[8]);
				    background.classList.remove(clasesBackground[7],clasesBackground[9]);			
				break;
				case 13:
				    background.classList.add(clasesBackground[9]);
				    background.classList.remove(clasesBackground[8],clasesBackground[10]);			
				break;
				case 14:
				    background.classList.add(clasesBackground[10]);
				    background.classList.remove(clasesBackground[9],clasesBackground[11]);			
				break;
				case 15:
				    background.classList.add(clasesBackground[11]);
				    background.classList.remove(clasesBackground[10],clasesBackground[12]);			
				break;
				case 16:
				    background.classList.add(clasesBackground[12]);
				    background.classList.remove(clasesBackground[11],clasesBackground[13]);			
				break;
				case 17:
				    background.classList.add(clasesBackground[13]);
				    background.classList.remove(clasesBackground[12],clasesBackground[14]);			
				break;
				case 18:
				    background.classList.add(clasesBackground[14]);
				    background.classList.remove(clasesBackground[13],clasesBackground[15]);			
				break;
				case 19:
				    background.classList.add(clasesBackground[15]);
				    background.classList.remove(clasesBackground[14],clasesBackground[0]);			
				break;

			  }*/
	}	
});

// fullpage_api.setScrollingSpeed(1000);