/* global AFRAME, THREE */    // what?
AFRAME.registerComponent('point-to-teleport', {
    schema: {
      // pressDistance: { default: 0.06 }
    },
  
    init: function () {
      
      // this.worldPosition = new THREE.Vector3();
      // this.handEls = document.querySelectorAll('[hand-tracking-controls]');
      // this.pressed = false;

      //   this.el.emit('pressedended');

      var teleButton = document.createElement("a-entity");
      this.el.appendChild(teleButton);
      teleButton.setAttribute("pressable", {pressDistance: "0.02"});
      teleButton.setAttribute("geometry", "primitive: sphere; radius: 0.02");
      teleButton.setAttribute("position", "0 1.3 -1");
      this.el.addEventListener("pressedstarted", function(e) { 
        if (e.target == teleButton) {
          teleButton.setAttribute("position", "0 2 -1");
          }
        })
    },

    tick: function () { // every frame
    },

  });
  