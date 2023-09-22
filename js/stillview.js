AFRAME.registerComponent('video-logic', {
    init: function () {
        const marker = document.querySelector("a-marker");
        var item= document.querySelector("#entityID1");
        item.setAttribute("gltf-model",'./assets/modelos/casco/scene.gltf');
        marker.addEventListener("markerFound", evt => {
          // you can wait a while so the content won't appear somewhere on the border
          //setTimeout(evt => {
           
            item.setAttribute("position", marker.getAttribute("position"));
            item.setAttribute("animation",animation="property: rotation; to:450 180 0; loop: true; dur: 10000")
            console.log("MKFOUND");
          //}, 500)
        })
    }
});
