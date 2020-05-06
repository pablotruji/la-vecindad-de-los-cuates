var background = document.getElementById('background-slide');
var clasesBackground = ['slide-1-background','slide-2-background', 'slide-3-background','slide-4-ensaladas-background',
'slide-4-tacos-background','slide-5-background','slide-6-background','slide-7-background','slide-8-background','slide-9-background',
'slide-10-background','slide-11-background','slide-12-background','slide-13-background', 'slide-14-background',
'slide-15-background'];

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
	
	// bigSectionsDestination: 
	afterSlideLoad: function( section, origin, destination, direction){
		var loadedSlide = this;
		
			 //first slide of the second section
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

			  }
	}	
});

// fullpage_api.setScrollingSpeed(1000);