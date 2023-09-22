var elemPP=0;
var epp= ["arnes", "barbijo","casco","chaleco", "gafas", "guantes","latex", "zapatos"]; /*"bota"*/

var epp1= [ "casco", "gafas","chaleco"]; /*"zapatos"*/

var epp2= ["gafas","barbijo", "latex"]; /*"bota"*/

var epp3= ["arnes", "barbijo",  "casco","chaleco", "gafas", "guantes","latex"]; /*"bota", "zapatos"*/

var epp4= ["arnes", "barbijo", "casco","chaleco", "gafas", "guantes","latex"]; /*"bota","zapatos" */




var botones=document.querySelectorAll(".boton");
botones.forEach(bots => {bots.addEventListener("click",(e)=>{

    var marker= document.querySelector(".activo");
    var idMarker=marker.id;
    var modelo=marker.querySelector(".modelo");
    var botonOpcion= e.target.id;
    console.log("pulso"+botonOpcion);

    
    if(idMarker==1){
        console.log("marker"+idMarker+"activo");
        console.log("CANTIDAD DE ELEMENTOS:"+epp1.length);
        recorroModelos(modelo,epp1,botonOpcion);
    }

    if(idMarker==2){
        console.log("marker"+idMarker+"activo");
        recorroModelos(modelo,epp2,botonOpcion);
    }

    if(idMarker==3){
        console.log("marker"+idMarker+"activo");
        recorroModelos(modelo,epp3,botonOpcion);
    }

    if(idMarker==4){
        console.log("marker"+idMarker+"activo");
        recorroModelos(modelo,epp4,botonOpcion);
    }

})

});

/*
document.getElementById("sig").addEventListener("click",(e)=>{

    if ( elemPP<(epp.length-1)){

        elemPP=elemPP+1;       

        el.setAttribute("gltf-model",'./assets/modelos/'+epp[elemPP]+'/scene.gltf');
        el.setAttribute("scale",'1 1 1');
        console.log(epp[elemPP]+" Activo,contador="+elemPP);
    }
    if( elemPP==(epp.length-1) ){
        console.log("llego aca y vale largo")
        elemPP=0;
        
        el.setAttribute("gltf-model",'./assets/modelos/'+epp[elemPP]+'/scene.gltf');
        el.setAttribute("scale",'1 1 1');
        console.log(epp[elemPP]+" Activo,contador="+elemPP);
    }

});
*/




function recorroModelos(modeloActual,listaModelos,boton){
    
    var idModelo=modeloActual.id;
    console.log("idModeloAnterior="+idModelo);
    
    var iModelo= listaModelos.indexOf(idModelo);
    console.log("IMODELOanterior="+iModelo);
    
    if(boton=="pre" && idModelo !=""){

       
        console.log("es pre y no es idModelo Vacio");

        if(iModelo==0){
            
            modeloActual.setAttribute("gltf-model",'./assets/modelos/'+listaModelos[3]+'/scene.gltf');
            modeloActual.setAttribute("id",listaModelos[3]);
            console.log("Bpre+iModelo:"+listaModelos[3]+" Activo"); 
        }

        if (iModelo>0){
            iModelo=iModelo-1;                  
            modeloActual.setAttribute("gltf-model",'./assets/modelos/'+listaModelos[iModelo]+'/scene.gltf');
            modeloActual.setAttribute("id",listaModelos[iModelo]);
            console.log("Bpre+modelo"+listaModelos[iModelo]+" Activo"); 
            }      
    }

    if(boton=="sig" && idModelo !=""){

        console.log("es sig y no es idModelo Vacio");
        
        if(iModelo== ((listaModelos.length)-1)  ){
            modeloActual.setAttribute("gltf-model",'./assets/modelos/'+listaModelos[0]+'/scene.gltf');
            modeloActual.setAttribute("id",listaModelos[0]);
            console.log("ENTRO AL ERROR \n boton sig+iModelo previo =largo cadena, modelo:"+listaModelos[0]+" Activo"); 
        }

        if (iModelo< ( (listaModelos.length)-1)  ){
            iModelo=iModelo+1;                  
            modeloActual.setAttribute("gltf-model",'./assets/modelos/'+listaModelos[iModelo]+'/scene.gltf');
            modeloActual.setAttribute("id",listaModelos[iModelo]);
            console.log("Bsig+modelo:"+listaModelos[iModelo]+" Activo"); 
            }    
    }

        
    if(idModelo===""){
            
        iModelo=0;            
        console.log("MODELO VACIO,se pone el modelo"+"gltf-model",'./assets/modelos/'+listaModelos[0]+'/scene.gltf')
        modeloActual.setAttribute("gltf-model",'./assets/modelos/'+listaModelos[0]+'/scene.gltf');
        modeloActual.setAttribute("id",listaModelos[0]);

    }
}			
    

    
  /*<<<<<<<<<<<<<<<<<<<<<<<<  
    document.getElementById("sig").addEventListener("click",(e)=>{
    
        if ( elemPP<(epp.length-1)){
    
            elemPP=elemPP+1;       
    
            el.setAttribute("gltf-model",'./assets/modelos/'+epp[elemPP]+'/scene.gltf');
            el.setAttribute("scale",'1 1 1');
            console.log(epp[elemPP]+" Activo,contador="+elemPP);
        }
        if( elemPP==(epp.length-1) ){
            console.log("llego aca y vale largo")
            elemPP=0;
            
            el.setAttribute("gltf-model",'./assets/modelos/'+epp[elemPP]+'/scene.gltf');
            el.setAttribute("scale",'1 1 1');
            console.log(epp[elemPP]+" Activo,contador="+elemPP);
        }
    
    });
    
*/
