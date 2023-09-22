let recognition = new webkitSpeechRecognition();
recognition.lang = "es-ES";
recognition.continuous = true;
recognition.interimResults = true;
//recognition.maxAlternatives = 1;
//recognition.start();
var tiempoUltimoRegistro = 0;



function activarAsistenteVoz(){
    recognition.start();
    leerTexto("Asistente de voz activado");
}


recognition.onresult = (event) => {
    const results = event.results;

    ///const frase = results[0][0].transcript.split(" ");
    const frase = results[results.length - 1][0].transcript;
    //console.log("ultima frase:" + frase[frase.length - 1]);
    console.log("frase completa:" + frase);
    const partes = frase.split(" ");
    console.log("ultima palabra:" + partes[partes.length - 1]);

    if (partes[partes.length - 1] == "siguiente") {
        seleccionarEntidad("sig");
    }

    if (partes[partes.length - 1] == "anterior") {
        seleccionarEntidad("pre");
    }

    if (partes[partes.length - 1] == "acercar") {
        var marker = document.querySelector(".activo");
        var modelo = marker.querySelector(".modelo");

        acercar(modelo.id);
    }

    if (partes[partes.length - 1] == "alejar") {
        var marker = document.querySelector(".activo");
        var modelo = marker.querySelector(".modelo");

        alejar(modelo.id);
    }

    if (partes[partes.length - 1] == "rotar") {
        var marker = document.querySelector(".activo");
        var modelo = marker.querySelector(".modelo");

        rotacion(modelo.id);
    }

    if (partes[partes.length - 1] == "alto") {
        var marker = document.querySelector(".activo");
        var modelo = marker.querySelector(".modelo");

        alto(modelo.id);
    }

    //leerTexto(frase);
}

function seleccionarEntidad(botonOpcion) {

    var fechaHora = new Date();
    console.log("tiempo actual:" + fechaHora.getSeconds() + " ultimo valor:" + tiempoUltimoRegistro);

    if (Math.abs(fechaHora.getSeconds() - tiempoUltimoRegistro) > 2) {
        tiempoUltimoRegistro = fechaHora.getSeconds();
        console.log("ejecutar");

        var marker = document.querySelector(".activo");
        var idMarker = marker.id;
        var modelo = marker.querySelector(".modelo");

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


}

function leerTexto(texto) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = texto;
    speech.volume = 1;//puede ser 1 o 0
    speech.rate = 1;//velocidad de lectura
    speech.pitch = 1;//tono

    speech.voice = window.speechSynthesis.getVoices()[2]


    window.speechSynthesis.speak(speech);
}


function acercar(nombreentidad) {
    var fechaHora = new Date();
    console.log("tiempo actual:" + fechaHora.getSeconds() + " ultimo valor:" + tiempoUltimoRegistro);

    if (Math.abs(fechaHora.getSeconds() - tiempoUltimoRegistro) > 2) {
        tiempoUltimoRegistro = fechaHora.getSeconds();
        console.log("ejecutar");

        console.log("modelo id:" + nombreentidad);
        var objeto = document.getElementById(nombreentidad);

        var x = objeto.getAttribute("scale").x * 2;
        var y = objeto.getAttribute("scale").y * 2;
        var z = objeto.getAttribute("scale").z * 2;

        var vector = String(x)+" "+String(y)+" "+String(z);
        //console.log(vector)

        //objeto.setAttribute("scale", "2 2 2");
        objeto.setAttribute("scale", vector);
    }
}

function alejar(nombreentidad) {
    var fechaHora = new Date();
    console.log("tiempo actual:" + fechaHora.getSeconds() + " ultimo valor:" + tiempoUltimoRegistro);

    if (Math.abs(fechaHora.getSeconds() - tiempoUltimoRegistro) > 2) {
        tiempoUltimoRegistro = fechaHora.getSeconds();
        console.log("ejecutar");

        console.log("modelo id:" + nombreentidad);
        var objeto = document.getElementById(nombreentidad);

        var x = objeto.getAttribute("scale").x / 2;
        var y = objeto.getAttribute("scale").y / 2;
        var z = objeto.getAttribute("scale").z / 2;

        var escala = String(x)+" "+String(y)+" "+String(z);
        //console.log(vector)

        //objeto.setAttribute("scale", "1 1 1");
        objeto.setAttribute("scale", escala);
    }
}


function rotacion(nombreentidad) {
    var fechaHora = new Date();
    console.log("tiempo actual:" + fechaHora.getSeconds() + " ultimo valor:" + tiempoUltimoRegistro);

    if (Math.abs(fechaHora.getSeconds() - tiempoUltimoRegistro) > 2) {
        tiempoUltimoRegistro = fechaHora.getSeconds();
        console.log("ejecutar");

        console.log("modelo id:" + nombreentidad);
        var objeto = document.getElementById(nombreentidad);

        //var objeto = document.querySelector("a-box");
        objeto.setAttribute("animation", "property: rotation;  to: 1 0 0; from: 0 360 0; dur: 6000; easing: linear; loop: true");
    }
}


function alto(nombreentidad) {
    var fechaHora = new Date();
    console.log("tiempo actual:" + fechaHora.getSeconds() + " ultimo valor:" + tiempoUltimoRegistro);

    if (Math.abs(fechaHora.getSeconds() - tiempoUltimoRegistro) > 2) {
        //var objeto = document.querySelector("a-box");
        var objeto = document.getElementById(nombreentidad);
        objeto.removeAttribute("animation");
        //objeto.setAttribute("rotation", "0 45 0");
    }
}

function configurarEscala(escala){
    /*configurar escala */
}

/*
function reiniciar(){
    var objeto = document.querySelector("a-box");
    objeto.setAttribute("position", "-1 0.5 -3");
    objeto.setAttribute("rotation", "0 45 0");
    objeto.setAttribute("scale", "1 1 1");
}*/