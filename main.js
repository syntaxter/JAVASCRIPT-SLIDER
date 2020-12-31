var botonNext = document.getElementById("clicNext");
var botonBack = document.getElementById("clicBack");
var imagen = document.getElementById("imagen");
var imagen2 = document.getElementById("imagen2");
var titulos = document.querySelector(".titulo")

var arrayImages = ["slide1.svg","slide2.svg","slide3.svg","slide4.svg"]


var textos = ["Stay Online","Awesome People", "Statistics","Social Media"]

/*animacion*/
var tl = gsap.timeline();
var i=0;
var objeto ="";
titulos.innerText= textos[0]
imagen.src = arrayImages[0]



//variable acumula clic
botonNext.addEventListener("click", function() {
        i++;
        objeto= this.id;
        slide()
        changeText(i)
})
    
botonBack.addEventListener("click", function() {
        i-=1
        objeto= this.id;
        slide()
        changeText(i)

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
    gsap.to(imagen, {opacity:0,x:200,display:"none",duration:1})
    gsap.fromTo(imagen, {x:-500,display:"none",opacity:0}, {x:0,opacity:1,display:"block",ease:"sine",duration:1,delay:1})
    //gsap.to(imagen, {opacity:0,x:-200,display:"none",duration:1})
    //gsap.fromTo(imagen2, {x:500,display:"none",opacity:0}, {x:0,opacity:1,display:"block",ease:"sine",duration:1,delay:1})

    //animacion de titulos//
    gsap.fromTo(titulos, {x:-500,display:"none",opacity:0}, {x:0,opacity:1,display:"block",ease:"sine",duration:1,delay:1.2})
}

function retroceder() {
    imagen.src= arrayImages[i];
    tl.to(botonBack, {duration: 0.3, y: 0})
        .to(botonBack, {duration: 0.3, y: 20})
     .to(botonBack, {duration: 0.3, x: 0})

    gsap.to(imagen, {opacity:0,x:-200,display:"none",duration:1})
    gsap.fromTo(imagen2, {x:500,display:"none",opacity:0}, {x:0,opacity:1,display:"block",ease:"sine",duration:1,delay:1})

    //textos
    gsap.fromTo(titulos, {x:500,display:"none",opacity:0}, {x:0,opacity:1,display:"block",ease:"sine",duration:1,delay:1.2})


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









