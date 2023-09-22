var x = 1;
var y = 1;
var z = 1;


/*Sistema de reconocimiento de voz*/
var buffer = "";
var palabra = "";
var continuar = true;

let recognition = new webkitSpeechRecognition();
recognition.lang = "es-ES";
recognition.continuous = true;
recognition.interimResults = true;
//recognition.maxAlternatives = 1;


recognition.onresult = (event) => {
    const results = event.results;
    var frase = results[results.length - 1][0].transcript;
    frase = frase.trimStart();
    frase = frase.trimEnd();
    
    detectorDePalabras(frase);
    
    //leerTexto(frase);
}


function detectorDePalabras(frase){
    if(continuar){
        if(buffer == ""){
            buffer = frase;
        }else{
            if(frase == buffer){
                console.log("%c palabra:" + frase, 'background: #222; color: #bada55');
                palabra = frase;
                continuar = false;
                invocador(frase);
            }else{
                buffer = frase;
            }
        }
    }else{
        //continuar = false --> fin = true
        if(frase.length < palabra.length){
            continuar = true;
        }
    }
}

/*Sistema de lectura*/

function leerTexto(texto) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = texto;
    speech.volume = 1;//puede ser 1 o 0
    speech.rate = 1;//velocidad de lectura
    speech.pitch = 1;//tono

    speech.voice = window.speechSynthesis.getVoices()[2]


    window.speechSynthesis.speak(speech);
}

/*Sistema de interpretacion de comandos */

/*Invocador*/
function invocador(comando) {
    
    var marker = document.querySelector(".activo");
    var modelo = marker.querySelector(".modelo");

    if (comando == "siguiente") {
        seleccionarEntidad("sig");
    }

    if (comando == "anterior") {
        seleccionarEntidad("pre");
    }

    if (comando == "acercar") {
        acercar(modelo.id);
    }

    if (comando == "alejar") {
        alejar(modelo.id);
    }

    if (comando == "rotar") {
        rotacion(modelo.id);
    }

    if (comando == "alto") {
        alto(modelo.id);
    }

    if(comando.split(" ")[0] == "escala"){
        configurarEscala(comando.split(" ")[1], modelo.id);
    }

    if(comando == "comandos"){
        listarComandos();
    }
}


/*Comandos*/
function activarAsistenteVoz() {
    recognition.start();
    leerTexto("Asistente de voz activado");
}


function seleccionarEntidad(botonOpcion) {
    
    var marker = document.querySelector(".activo");
    var idMarker = marker.id;
    var modelo = marker.querySelector(".modelo");


    var escaladefecto = String(x) + " " + String(y) + " " + String(z);
    var objeto = document.getElementById(modelo.id);
    objeto.setAttribute("scale", escaladefecto);

    console.log("pulso" + botonOpcion);


    if (idMarker == 1) {
        console.log("marker" + idMarker + "activo");
        console.log("CANTIDAD DE ELEMENTOS:" + epp1.length);
        recorroModelos(modelo, epp1, botonOpcion);
    }

    if (idMarker == 2) {
        console.log("marker" + idMarker + "activo");
        recorroModelos(modelo, epp2, botonOpcion);
    }

    if (idMarker == 3) {
        console.log("marker" + idMarker + "activo");
        recorroModelos(modelo, epp3, botonOpcion);
    }

    if (idMarker == 4) {
        console.log("marker" + idMarker + "activo");
        recorroModelos(modelo, epp4, botonOpcion);
    }

}

function acercar(nombreentidad) {

    var objeto = document.getElementById(nombreentidad);

    var xt = objeto.getAttribute("scale").x * 2;
    var yt = objeto.getAttribute("scale").y * 2;
    var zt = objeto.getAttribute("scale").z * 2;

    var vector = String(xt) + " " + String(yt) + " " + String(zt);
    
    objeto.setAttribute("scale", vector);

}

function alejar(nombreentidad) {

    var objeto = document.getElementById(nombreentidad);

    var xt = objeto.getAttribute("scale").x / 2;
    var yt = objeto.getAttribute("scale").y / 2;
    var zt = objeto.getAttribute("scale").z / 2;

    var escala = String(xt) + " " + String(yt) + " " + String(zt);
    
    objeto.setAttribute("scale", escala);

}


function rotacion(nombreentidad) {

    var objeto = document.getElementById(nombreentidad);

    objeto.setAttribute("animation", "property: rotation;  to: 1 0 0; from: 0 360 0; dur: 6000; easing: linear; loop: true");

}


function alto(nombreentidad) {
    var objeto = document.getElementById(nombreentidad);
    objeto.removeAttribute("animation");
    //objeto.setAttribute("rotation", "0 45 0");

}

function configurarEscala(escala, nombreentidad) {
    /*configurar escala */
    var objeto = document.getElementById(nombreentidad);

    x = escala;
    y = escala;
    z = escala;

    var nuevaescala = String(x) + " " + String(y) + " " + String(z);
    console.log(nuevaescala);
    objeto.setAttribute("scale", nuevaescala);
}

/*
function reiniciar(){
    var objeto = document.querySelector("a-box");
    objeto.setAttribute("position", "-1 0.5 -3");
    objeto.setAttribute("rotation", "0 45 0");
    objeto.setAttribute("scale", "1 1 1");
}*/

function listarComandos(){
    var texto = "Los comandos disponibles son: anterior, avanzar, acercar, alejar, rotar, escala x";
    leerTexto(texto);
}

