var botonNext = document.getElementById("clicNext");
var botonBack = document.getElementById("clicBack");
var imagen = document.getElementById("imagen");
var imagen2 = document.getElementById("imagen2");
var titulos = document.querySelector(".titulo")
var indicador = document.getElementById("indicador")
var arrayImages = ["slide1.svg","slide2.svg","slide3.svg","slide4.svg"]


var textos = ["Stay Online","Awesome People", "Statistics","Social Media"]

/*animacion*/
var tl = gsap.timeline();
var i=0;
var objeto ="";
titulos.innerText= textos[0]
imagen.src = arrayImages[0]

//indicaodres
var int = i;
function indi() {
    for (int=0; int < arrayImages.length; int++) {
        var crea = document.createElement("span");
        crea.setAttribute("id",int)
        crea.setAttribute("data-test","false")
        indicador.appendChild(crea)
        console.log(crea)
        spans = crea;
        stgSpan = document.querySelectorAll("span")
   
    }
}

//funciones que se ejecutan cuando carga el documento
indi()


//variable acumula clic
botonNext.addEventListener("click", function() {
        i++;
        objeto= this.id;
        slide()
        changeText(i)
        slideSpan(i)
})
    
botonBack.addEventListener("click", function() {
        i-=1
        objeto= this.id;
        slide()
        changeText(i)
        slideSpan(i)

})


function slide() {
    if(objeto==botonNext.id) {
        testRango()
        pasar()
    }     
    if(objeto==botonBack.id) {
        testRango2()
        retroceder()
    }
}


function pasar() {

    //pasando las imagenes
    imagen.src= arrayImages[i];
    tl.to(botonNext, {duration: 0.3, y: 0})
        .to(botonNext, {duration: 0.3, y: 20})
            .to(botonNext, {duration: 0.3, x: 0});

//animacion imagenes
    gsap.to(imagen, {opacity:0,x:200,display:"none",duration:0.5})
    gsap.fromTo(imagen, {x:-500,display:"none",opacity:0}, {x:0,opacity:1,display:"block",ease:"sine",duration:1})
    //gsap.to(imagen, {opacity:0,x:-200,display:"none",duration:1})
    //gsap.fromTo(imagen2, {x:500,display:"none",opacity:0}, {x:0,opacity:1,display:"block",ease:"sine",duration:1,delay:1})

    //animacion de titulos//
    gsap.fromTo(titulos, {x:-500,display:"none",opacity:0}, {x:0,opacity:1,display:"block",ease:"sine",duration:1.2})
}

function retroceder() {
    imagen.src= arrayImages[i];
    tl.to(botonBack, {duration: 0.3, y: 0})
        .to(botonBack, {duration: 0.3, y: 20})
     .to(botonBack, {duration: 0.3, x: 0})

    gsap.to(imagen, {opacity:0,x:-200,display:"none",duration:1})
    gsap.fromTo(imagen, {x:500,display:"none",opacity:0}, {x:0,opacity:1,display:"block",ease:"sine",duration:1})

    //textos
    gsap.fromTo(titulos, {x:500,display:"none",opacity:0}, {x:0,opacity:1,display:"block",ease:"sine",duration:1.2})


    //gsap.to(imagen, {opacity:0,x:200,display:"none",duration:1})
    //gsap.fromTo(imagen2, {x:-500,display:"none",opacity:0}, {x:0,opacity:1,display:"block",ease:"sine",duration:1,delay:1})
}


function testRango() {
    if(i<4 && i >=0) {
        console.log("dentro del rango")
    } else {
        console.log("fuera del rango")
        i=0;
    }
}
function testRango2() {
    if(i<4 && i >=0) {
        console.log("dentro del rango")
    } else {
        console.log("fuera del rango")
        i=3;
    }
     
}

function changeText(i) {
    titulos.innerText= textos[i];
}






//cambia estilos de posicion de forma manual

var span1 = document.getElementById(0);
var span2 = document.getElementById(1);
var span3 = document.getElementById(2);
var span4 = document.getElementById(3);


span1.addEventListener("click",spansLs)
span2.addEventListener("click",spansLs)
span3.addEventListener("click",spansLs)
span4.addEventListener("click",spansLs)


//ESTA FUNCION NECESITO SIMPLIFICARLA, CON UN LISTENER QUE PERMITA QUE AL DAR CLIC RECONOZCA EN QUE ELEMENTO SE DIO CLIC.
function spansLs() {
    var indicador = this.id;
    switch(indicador) {
        case "0": 
        span1.dataset.test= "true";
        span2.dataset.test= "false";
        span3.dataset.test= "false";
        span4.dataset.test= "false";
        i=0
        retroceder();
        changeText(i)

        console.log(indicador);
        break;

        case "1": 
        span1.dataset.test= "false";
        span2.dataset.test= "true";
        span3.dataset.test= "false";
        span4.dataset.test= "false";
        i=1
        retroceder();
        changeText(i)

        break;

        case "2": 
        span1.dataset.test= "false";
        span2.dataset.test= "false";
        span3.dataset.test= "true";
        span4.dataset.test= "false";
        console.log(indicador);
        i=2;
        retroceder();
        changeText(i)

        break;

        case "3":
        span1.dataset.test= "false";
        span2.dataset.test= "false";
        span3.dataset.test= "false";
        span4.dataset.test= "true";
        console.log(indicador);
        retroceder();
        changeText(i)

        i=3
        break;
        
    }

}

function slideSpan(i) {
    var f = 0;
    if (stgSpan[i].id !== i ) {
       for (f=0; f < arrayImages.length; f++) {
            stgSpan[f].dataset.test= "false";
       } 
        
       stgSpan[i].dataset.test= "true";
 
    }
}



