var eppList;
var eppElegido;

    AFRAME.registerComponent('registerevents', {
		init: function () {
			var marker = this.el;
			var markerId = marker.id;

			var menu=document.querySelector(".boton_container");

			marker.addEventListener('markerFound', function() {
								
                //console.log("Encontro marker"+markerId);
                menu.style.display="block";
				marker.classList.add("activo");

				// TODO: Add your own code here to react to the marker being found.


			});

			marker.addEventListener('markerLost', function() {
				// TODO: Add your own code here to react to the marker being lost.
                menu.style.display="none";
				marker.classList.remove("activo");
				//textMrk.setAttribute("value","");
				//modelMrk.setAttribute("value","");

				
			});
		}
	});
