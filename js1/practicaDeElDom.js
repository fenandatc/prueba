
const d =document;

const ls =localStorage;

const w =window;

const $boton = document.getElementById('panel-btn');
console.log( $boton)
const $panelPadreDeLink = document.getElementById('panel-de-sectores-padre');

const $panelDeLosLink = document.querySelectorAll(".panel-link");

$boton.addEventListener("click", () => {
	if($panelPadreDeLink.classList.contains('panel__is-active')){
   $panelPadreDeLink.classList.toggle('panel__is-active');} else {
	$panelPadreDeLink.classList.toggle('panel__is-active');
	}
});

$panelDeLosLink.forEach((elem) => {
  elem.addEventListener("click", () => {
    
 /*aqui dice que cunado cuando de click se remueva 
 la clase  'panel__is-active'*/
    $panelPadreDeLink.classList.remove('panel__is-active');
    
  });
});

/*esto sirve como una lmacenador de document o un export "pa no usar el doquiemt.queryselector y by id*/
d.addEventListener("DOMContentLoaded",(e)=>{
    			 
/*es una ,amera de no usar el docu,emt.selecotr a cada rato pero pon en orden
con la funcion despues es mas facil*/
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("#reloj","#activar-alarma","#desactivar-alarma");
    countdown("countdown","12/25/2020 0:00 AM","Feliz Navidad 🎅👋 ");
    scrollTopBtn(".scroll-top-btn");
    responsiveMedia("yotube","(min-width:1024px)",`<a class="classMovile1" target="BLANK" href='https://youtu.be/QLijcNag1NY'>PRESIONE AQUI PARA VER EL VIDEO</a>`,'<iframe width="560" height="315" src="https://www.youtube.com/embed/V-Z-3V8yXZg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    responsiveMedia("mapaGoogle","(min-width:1024px)",`<a class="classMovile2" target="BLANK" href='https://goo.gl/maps/7AShCt3cqRTz7MYa8'>PRESIONE AQUI PARA VER EL MAPA</a>` ,`
    	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.941126605532!2d-77.04282398509595!3d-12.116180791421131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9d19c99bc99%3A0x4b2ade1d9becbab7!2sPiura%201155%20-%20Miraflores!5e0!3m2!1ses-419!2spe!4v1601533416416!5m2!1ses-419!2spe" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    getGeolocation("geolocation");
    searchFilters(".card-filter",".card");
    sorteo("#winner-btn",".player");
    slider();
   /* scrollSpy();*/
}) 
drakThemeLigth(".drak-theme-Light","dark-mode");
/*networkStatus(); este es de la coneccion de red */
function digitalClock(clock,btnPlay,btnStop){
    let clockTempo;
    d.addEventListener("click", e=>{
        if(e.target.matches(btnPlay)){
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${"0"+(clockHour)}</h3>`;
            }, 1000);
        	/*AQUI DICE QUE  SE DESABILITE BTN MENU SI LO BUELBEN A 
        	PRESIONAR OSEA QUE SI PRECIONAN DOS VECES NO ,NOS FLASE Y
        	ESO ASE QUE NO SE EJECUTE Y PASE AL SIGIUWNTW
        	OSEA  DESABILITAR = DISABLED ==== TRUE DICE
        	 DESBILITAME.EL EVENTO .MANEJAR.TRUE*/
        	 /*	buenoooooooooooooo no agas caso alo priero me equivo todo se aprende
        	 equivocandose asi que te voy a explicar dice que el metodo disabled se ha 
        	 positivo osea es puede aser que sea flasev

        	 bueno osea que si quieres desabilitar solo pongas flase 
        	 x q toda condicional q de flase no se hace 
        	 SIRVE PARA DESABILITAR Y HABILITAR ISEA PARA NO MOSTAR SI NO QUIERES*/
           e.target.disabled = true 
        }
        /*DICE al eevnto agregale el destino de ()
        target.matches=partido de destino "target.matches"-------ESTO LO Q HACE ES PREGUNTAR SI EL SELECTOR Q UTLIZASTE ES VALIDO
        OSEA SI ESTA DENTRO Y SI ES VERDADERO  91 MIN 9:920*/
        	/*O MAS RESUMIDO Q SI MAÑUCAS ESTE SUCEDE LO SIQUIENTE... */
        if(e.target.matches(btnStop)){
        	/*aqui deice qu elimie el intervalo de tiempo*/
            clearInterval (clockTempo);
            /*aqi ase que no haiga contenido que agregar*/
            d.querySelector(clock).innerHTML = `<h3 class="paron-reloj">SE PARA el rejog presiona para volvel a verlo</h3>`/*OTRA OCOPIN SERI = null*/;
            d.querySelector(btnPlay).disabled = false;
        }
    })
}

let audio = d.getElementById("audio");
function alarm(clock, alarmPlay, alarmStop){
    let clockAlarm;
    d.addEventListener("click", e=>{
        if(e.target.matches(alarmPlay)){
            clockAlarm = setInterval(() => {
            	/*ESTO SIRVE PARA CORRER EL AUDIO audio.play() RECUERDA QUE SE LLAMA AUDIO X EL
            	ID ; */
                audio.play();
            }, 1000);

            e.target.disabled = true
        }
/*esto es para q se pare */
        if(e.target.matches(alarmStop)){
            clearInterval (clockAlarm);
            d.querySelector(clock).innerHTML =`<h3 class="paron-alarma">SE PARA LA ALARMAN</h3>`; /*OTRA OCOPIN SERI = null*/;
            d.querySelector(alarmPlay).disabled = false;
        }
    })
    
}
/*evebtios de el teclado*/
/*function shortcuts(e) {
	ES LA CLASE DE EVENTO O SU TIPO 
	console.log(e.type);*/
	/*este da la techa q mañucaste
	console.log(e.key);*/
	/*codigp de la letra
	console.log(e.keyCode);
	console.log(e);
	console.log(`alt:${e.altKey}`);
	console.log(`ctrl:${e.ctrlKey}`);
	console.log(`shift:${e.shiftKey}`);*/
	/*recuerda que la tecla q toque deve ir entre parentesis*/

/*asi se crea atajos de el teclado para tu pagina seqnuio
	if (e.key==="a" && e.altKey) {
		alert("lograste lanzar una alerta :v")
	};
	if (e.key==="c" && e.altKey) {
		confirm("lograste lanzar una conformazion :v")
	};
	if (e.key==="p" && e.altKey) {
		prompt("lograste lanzar una prompt o aviso :v")
	};
}*/
/*especialmente usa solo estos dos eventos*/
/*el target es el body x si no sabes*/
/*con este evento es alterminar de presionar na letra
d.addEventListener("keyup",(e)=>{ shortcuts(e) })*/


/*es te relisa cuando mañucas el boton oses al intante
d.addEventListener("keydown",(e)=>{ shortcuts(e) })*/


/*d.addEventListener("keydown",(e)=>{ shortcuts(e) })
video 84 eventos de teclado --cre atajos*/




/*evento con el teclADO*/
/*PREIMER PASO crea una funcion para poner los movientos de el
teclado*/
/*function moueveElBall(e,ball,stage) {
	const $ball=d.querySelector(ball);
	const $stage=d.querySelector(stage);*/
	

/*1.5CREEMOS LAS DOS VARAIBLES Q SE VAN MOVER OSEA DE PLANO CARTESIANO*/
/*let x=0;
let y=0;
2 creamos un switch para mover la ball pero no para 
arreglar el error  de el teclado eso es siguiente*/

	/*
switch(e.keyCode){
	case 37 :
botn lefet-derecha*/
	/*x--;
	break;
	case 38 :
	botn up-arriba*/
	/*y--;
	break;
	case 39 :
	botn rigth-izquierda*/
	/*x++;
	break;
	case 40 :
	botn down-abajo*/	
	/*y++;
	break;
   default:
   break;
}

$ball.style.transfrom =`traslate(${x*10}px,${y*10}px)`

}*/

	



/*d.addEventListener("keydown",(e)=>{
	shortcuts(e)
	
	console.log(e.keyCode);
	moueveElBall(".ball",".stage");
	console.log("aca toy")
})
*/
/*evento de el teclado*/
const $controladorPelota =document.getElementById("controladorPelota"),
      $Mapa =document.getElementById("mapa"),
      $pelota=document.getElementById("pelota")

$controladorPelota.addEventListener("keydown",(e)=>{
  let topPelotaNow=parseFloat(window.getComputedStyle($pelota).top.replace('px','')),
      leftPelotaNow=parseFloat(window.getComputedStyle($pelota).left.replace('px','')),
      heightMapa=parseFloat(window.getComputedStyle($Mapa).height.replace('px','')),
      widthMapa=parseFloat(window.getComputedStyle($Mapa).width.replace('px','')),
      peloHeigth=parseFloat(window.getComputedStyle($pelota).height.replace('px','')),
      peloWidth=parseFloat(window.getComputedStyle($pelota).width.replace('px','')),
      sancada=10
  if(e.key==="ArrowUp"&&topPelotaNow>sancada)topPelotaNow-=sancada;
  if(e.key==="ArrowDown"&&topPelotaNow<(heightMapa-peloHeigth-(sancada*2)))topPelotaNow+=sancada;
  $pelota.style.top=topPelotaNow+"px"
  if(e.key==="ArrowLeft"&&leftPelotaNow>sancada)leftPelotaNow-=sancada;
  if(e.key==="ArrowRight"&&leftPelotaNow<(widthMapa-peloWidth-(sancada*2)))leftPelotaNow+=sancada;
  $pelota.style.left=leftPelotaNow+"px"
  $controladorPelota.value = "";
})
$controladorPelota.addEventListener("keyup",(e)=>{
  $controladorPelota.value = "";
})
/*---CUENTA REGRESIVA---*/
/*1*//*el otro lo utiliza como recurso al el domContenLodad*/
function countdown(id,limitDate,finalMessage) {
	let $countdown=document.getElementById(id);
	const countdownDate= new Date(limitDate).getTime();
	
	let countdownTempo=setInterval(()=>{
		
		// esto sirve para traer la fecha de hoy new Date()--esto sirve para convertir a milisegindos .getTime()
		let now =new Date().getTime();
		let limitDate=countdownDate-now;
		 days = Math.floor(limitDate/(1000*60*60*24)),
		 hours = ("0"+ Math.floor((limitDate%(1000*60*60*24))/(1000*60*60) )).slice(-2),
		 minutes = ("0"+ Math.floor((limitDate%(1000*60*60))/(1000*60) )).slice(-2),
		 seconds = ("0"+ Math.floor((limitDate%(1000*60))/(1000) )).slice(-2),
		/*antes no podiasmos usarla x q no tenia un valor y x eso sale NaN
		console.log(countdownDate,now,limitDate);*/
		$countdown.innerHTML=`<h2 class="navidad">Faltan un total de ${days} dias / ${hours} horas / ${minutes} minutos / ${seconds} segundos --- PARA Navidad </h2>`;
	
if ( limitDate < 0) {
	clearInterval(countdownTempo);
	$countdown.innerHTML=`<h3 class="navidad >${finalMessage}</h3>`
}

},1000)
}
/*aqui es btn x q alamacena el valor de DOMContentLoad*/
function scrollTopBtn (btn){
const $scrollBtn=d.querySelector(btn);
	/*SE UTILIZA WINDIW X Q EL SCROLL ESTA FUERA DE EL BOY=DOCUMENT*/
	w.addEventListener("scroll",(e)=>{
		/*d.documentElement.scrollTop ----ESTO SIRVE PARA CONTAR LOS PIXELES Q
		RECORRE EL SCROLL*/
		let scrollTop=d.documentElement.scrollTop
			// console.log(d.documentElement.scrollTop)
/*.remove ---es quita esa clase*/
		if (scrollTop>500) {
			$scrollBtn.classList.remove("hidden")
		}
/*.add-----es agrega esa clase*/
		else{	
			$scrollBtn.classList.add("hidden")}
		
})
/*SE UTILIZA DOCUMENT X Q SI ESTA DENTRO DE EL DOCUMETO==BODY*/
	
	d.addEventListener("click",(e)=>{
		// dice q el evento se agrege en btn
		if (e.target.matches(btn)) {
			w.scrollTo({/*-----scrollTo({aqui van sus parametroscon su calore}) se escribe asi sin la o */
				behavior:"smooth",
				top:0,
				// left:0,--esto siquieres un scroll de la parte de abajo
				})	
		}
	})
	
}
/*-- Tema Dark/Light --*/

function drakThemeLigth(btn,classDark) {
 const $themeDark=d.querySelector(btn);
 let $selectoresDark=d.querySelectorAll("[data-dark]")
// console.log($selectoresDark)
let sol= "☼ ";
let luna="☽";
/*constantes q se utilizaran en la funcion para mas rapido*/
const darkMode = () => {
	$selectoresDark.forEach( (el) => el.classList.add(classDark));
 			$themeDark.textContent = sol;
 			/*es setItem sirve para agregar localStorage */
 			ls.setItem("theme","dark")
}
const lightMode = () => {
$selectoresDark.forEach( (el) => el.classList.remove(classDark));
 			$themeDark.textContent = luna;
 			ls.setItem("theme","light")
}

 d.addEventListener("click", (e) => {
 	if (e.target.matches(btn)){
 		// console.log($themeDark.textContent);
 		if ($themeDark.textContent === luna) {darkMode()  } 	
 		else { lightMode() }
 		
 	}
 })

/*---API localStorage ----------
ESTO SIRVE PARA ALMACENAR INFORMACION EN LA COMPUTADORA AHORRADON DATOS osea q guarda los datos si tu lo dejas en
un modo se tiene q qdar asi hasta q lo desactives 
*/
	d.addEventListener("DOMContentLoaded",(e)=>{
	console.log(ls.getItem("theme"))
	/*esto funciona con otro mas q primero se tiene q declarar 292*/
	/*getIten es SI EL TEMA ES ("") OSEA BUSCANDO UN TEMA*/
	if (ls.getItem("theme") === null ) ls.setItem("theme","light")
	
	if (ls.getItem("theme") === "light" )  lightMode() ;

	if (ls.getItem("theme") === "dark" )  darkMode() ;
		console.log(ls.getItem("theme"))
	})
}


/*--------*-------- Responsive con JavaScript -----------------------------*/

 function responsiveMedia(id,mediaQuery,mobileContent,desktopContent) {
	
/*matchMedia()----sirve para selecioenar la medida deseada pero en medidas css medidas del body -width*/
	let breakpoint = w.matchMedia(mediaQuery);

	const responsive = (e) => {
		/*el matches solo sirve para ver la medida de la pantalla y si cumple o no lo q hemos dicho
		en si la medida si cumple true si no false */
		if (e.matches){
			d.getElementById(id).innerHTML= desktopContent ;
		}
		else{
			d.getElementById(id).innerHTML= mobileContent ;
		}
	
/*esto para verificar las medidas*/
// console.log(e.matches,mediaQuery);
	};
	// es agregale el manejador tal en este caso responsive
	breakpoint.addListener(responsive);
	responsive(breakpoint);
}

/*---------------- RESPONSIVE TESTER --------------------*/

function responsiveTester(idForm) {
	const $form = d.getElementById(idForm);
	let tester;
	d.addEventListener("submit",(e)=>{
		if (e.target === $form ) {
			e.preventDefault();
			/*alert("lograste")*/
			/*con esto ase eso de el url*/
			tester=w.open($form.direccion.value,"tester",`innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`)
		}


	})
	d.addEventListener("click",(e)=>{
		if (e.target === $form.cerrar) {
			tester.close();
		}
	})
}



/* ---Detección de Dispositivos User Agent -- */

/*estos te dan informacion de el dispositivo en q te encuentras ahora */
let n = navigator;
let ua = n.userAgent;


function userDeviceInfo(id) {
	const $id = d.getElementById(id);
	/*en celular*/
	let isMobile = {
		/*aqui dice q verifiq si se encuentra esto en nuestro useAgent q verfiq con el 
		.match si se encuentra alguno de estos si se encuentra 
		saldra si no se encuentra saldra null---en ese caso .macth SIRVE PARA VERIFICAR SI DENTRO DE 
		ALGO ESTA DENTRO DE LO Q QUEREMOS VER SI HAY SALDRA SI NO HAY ENTOONCES SALDRA NULL ¬¬¬¬¬¬@*/
		/*NOTA IMPORTANTE SI NO ES NECESARIO UTILIZAR {} OSEA ES MUY CORTA Y NO SE NECESITA
		ENTONCES NO PONGAS {} EN FUNCIONES =>(){}*/
		android: () =>  ua.match(/android/i) ,
		ios: () =>  ua.match(/iphone|ipad|ipod/i) ,
		windows: () =>  ua.match(/windows phone/i) ,
		any: function () { return this.android()||this.ios()||this.windows(); } 
	};
	/*desktop=escritorio en español*/
	let isDesktop = {
		linux: () =>  ua.match(/linux/i) ,
		mac: () =>  ua.match(/mac os/i) ,
		windows: () =>  ua.match(/windows nt/i) ,
		any: function () { return this.linux()||this.windows()||this.any(); } ,
	};
	// Browser=navevgador en el q se encuentra
	let isBrowser ={
		chrome: () => ua.match(/chrome/i),
		safari: () => ua.match(/safari/i) ,
		firefox: () => ua.match(/firefox/i) ,
		opera: () => ua.match(/opera|opera mini/i) ,
		ie: () => ua.match(/iemobile|msie/i) ,
		edge: () => ua.match(/edge/i) ,
		any: function () {return this.chrome()||this.safari()||this.firefox()||this.opera()||this.ie()||this.edge()}
	};
/*	console.log(isMobile.windows())
	console.log(isBrowser.chrome())*/
$id.innerHTML= `<ul>
				<li>${n.userAgent}</li>
				<li>${isMobile.any()?isMobile.any():isDesktop.any()}</li>
				<li>${isBrowser.any()}</li>
				</ul> `;
/*contenido exclusivo*/
// <mark>sirve para boner las cosas marcadas con amarillo</mark>
if (isBrowser.chrome()) { $id.innerHTML+="<p><mark>ESTE CONTENIDO SOLO SE VE EN CHROME</mark></p>"};
if (isBrowser.safari()) { $id.innerHTML+="<p><mark>ESTE CONTENIDO SOLO SE VE EN SAFIRA</mark></p>"};
if (isBrowser.firefox()) { $id.innerHTML+="<p><mark>ESTE CONTENIDO SOLO SE VE EN FIREFOX</mark></p>"};
if (isBrowser.opera()) { $id.innerHTML+="<p><mark>ESTE CONTENIDO SOLO SE VE EN OPERA</mark></p>"};
if (isBrowser.ie()) { $id.innerHTML+="<p><mark>ESTE CONTENIDO SOLO SE VE EN IE</mark></p>"};
if (isBrowser.edge()) { $id.innerHTML+="<p><mark>ESTE CONTENIDO SOLO SE VE EN EDGE</mark></p>"};

/*redirecion			---*/
// esta es la manera si es movil es mas facil q poner uno x uno asi 
/*if (isMobile.android()) {
	window.location.href="https://www.youtube.com/watch?v=-iYg2atmA9w&list=PLnpc-VWrwr4RiAB-1uqZykAP_eEau7EQS&index=8";
}
	if (isMobile.any()) {
		window.location.href="https://www.youtube.com/watch?v=-iYg2atmA9w&list=PLnpc-VWrwr4RiAB-1uqZykAP_eEau7EQS&index=8";
	};*/

}

/*ESTE CODIGO SI FUNCIONA PERO BUGEA LA COMPUTADOEA --VIDEO 93 SIRVE PA VER SI HAY INTERNET O NO
ONLINE  w.addEventListener("online",(e) => console.log(n.onLine) ); Y 	w.addEventListener("offline",(e) => console.log(n.onLine) ); */


// /*/*/*Detección del estado de la red*/
// function networkStatus() {
// const isOnLine = () =>{
// 	const $div =d.createElement("div");
// 	if (n.onLine) {
// 		$div.textContent="conexion establecida";
// 		$div.classList.add("online");
// 		$div.classList.remove("offline");
// 	} else {
// 		$div.textContent="conexion perdida";
// 		$div.classList.add("offline");
// 		$div.classList.remove("online");
// 	}
// 	d.body.insertAdjacentElement('afterbegin',$div)
//	setTimeOut(()=>d.body.removeChild($div),2000);
// }
//este sirve para imprimirse cada ves q haya internet osea true
// 	w.addEventListener("online",(e) => console.log(n.onLine) );
// este se imprime cada ves q no haiga intenet osea false y es onLine
// 	w.addEventListener("offline",(e) => console.log(n.onLine) );



	
// }

/*Detección de la Geolocalización*/

function getGeolocation(id) {
const $id = d.getElementById(id);
let options={enableHighAccuracy:true,
				timeout:5000,
				maximumAge:0
				};

	let success = (success) =>{
		let coords = success.coords;
			console.log(success);
			$id.innerHTML=`<p><mark>TU POSICION ACTUAL</mark> </p>
			<ul>
			<li> Latitud: <b>${coords.latitude}</b> </li>
			<li> Longitud: <b>${coords.longitude}</b> </li>
			<li> Precicion: <b>${coords.accuracy} metros</b> </li>
			</ul>

			<a href="https://www.google.com/maps/@${coords.latitude}.${coords.longitude}20z" target="BLANK" rel="noopener">VE TU LOCALIZACION EN GOOGLE MAPS</a>
			`
		};
	let error = (err) =>{
		$id.innerHTML=`<p> <mark> This error was generated because we do not have your authorization to use your location to show you your current location - Error : ${err.code}  ${err.message}.</mark> </p> <br>
						<p> <mark> Se ha generado este error porque no tenemos su autorizacion de usar su localizacion para enseñarle su ubicacion actual -  Error : ${err.code}  ${err.message}.</mark> </p>`
			console.log(`Error: ${err.code}   ${err.message}.`);
		};

	n.geolocation.getCurrentPosition(success,error,options);
}

/*Filtros de Búsqueda*/
function searchFilters (input,cartas) {
	$input = d.querySelector(input);
	$cartas = d.querySelectorAll(cartas);

	d.addEventListener("keyup",(e)=>{
		if (e.target.matches(input)) {
			if(e.key === "Escape") e.target.value ="";
			/*console.log(e.key);
			console.log(e.target.value);*/
			/*	SI CADA ELEMENTO DE LAS CARTAS ESTA ESCRITO EN MINUSCULA Y INCLUYE EL VALOR DE EL TECLADO SELE QUITE DISPLE NONE SI NO Q SE LE AUMENTE*/
			$cartas.forEach((el) => el.textContent.toLowerCase().includes(e.target.value)
				?el.classList.remove("filter")
				:el.classList.add("filter") ) 
		}
			 
	/*traduccion si en el buscador de el input se busca un valor(osea ub figcaption de la imagen y coincide con el input) de la carta se le quite la clase filter 
		que tiene un displey none y si no hay q le aumente*/
		
			
		
	})
		}
/* Sorteo Digitald*/
function sorteo(btn,concursantes) {
	
const getWinner= (concursantes) =>{
	const $concursantes =d.querySelectorAll(concursantes);
	/*este es la manera de sacar una  nombrerandom*/
	let random = Math.round(Math.random()*$concursantes.length);
	let winner = $concursantes[random];
	/*prueba=$concursantes,random , winner ;*/

	return `El ganador es: ${winner.textContent}`;
};
	d.addEventListener("click",(e)=>{
	if (e.target.matches(btn)) {
		let resultado = getWinner(concursantes);
		alert(resultado);
		/*console.log(resultado);*/
	}
})

/*97 es el como hacer sorteos */


}
/* Responsive Slider*/
function slider() {
	const $nextBtn= d.querySelector(" #next");
	console.log($nextBtn);
	const $prevBtn= d.querySelector(" #previos");
	const $slides = d.querySelectorAll(".slider-slide")
let i= 0;
d.addEventListener("click",(e) => {
	if (e.target === $prevBtn) {
		e.preventDefault();
		$slides[i].classList.remove("active");
		i--;
		if (i<0) {
			i=$slides.length - 1;

		}
	$slides[i].classList.add("active")
	}
if (e.target === $nextBtn) {
	e.preventDefault();
	$slides[i].classList.remove("active");
	i++;
	if (i >= $slides.length) {
		i=0;
	}

	$slides[i].classList.add("active")
}



})


}


/* ScrollSpy con Intersection Observer*/

/*
function scrollSpy() {
	const $sections =d.querySelectorAll("section[data-scroll-spy]");
	const  cb =(entries)  =>{
		const id = entry.target.getAttribute("id")
		if(entry.isIntersecting){
			d.querySelectorAll(`a[data-scroll-spy][href="#${id}]"`)
			classList.add("active")
		}
			else{
				d.querySelectorAll(`a[data-scroll-spy][href="#${id}]"`)
				classList.remove("active")
			}
		/*console.log("entries",entries);*/
	/*};*/
	/*const observe = new IntersectionObserve(cb,{
		threshold:[0.5,0.75]
	});
	$sections.forEach((el)=> observe.observe(el));

}

*/

























































































































