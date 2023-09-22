AFRAME.registerComponent('foo', {
    init: function() {
       this.el.addEventListener('model-loaded', e => {
           document.querySelector("#loadingEl").remove()
       })
    }
 })