/* global AFRAME, THREE */    // what?

AFRAME.registerComponent('point-to-teleport', {
    schema: {
      // pressDistance: { default: 0.06 }
    },
  
    init: function () {
      
      handEl = document.querySelector('[hand-tracking-controls]');
      
      console.log(handEl.components['hand-tracking-controls']);

      var teleButton = document.createElement("a-entity");
      teleButton.setAttribute("id", "teleButton");

      this.el.appendChild(teleButton);
      teleButton.setAttribute("pressable", {pressDistance: "0.02"});
      teleButton.setAttribute("geometry", "primitive: sphere; radius: 0.02");
      teleButton.setAttribute("position", "0 1.3 -1");
      this.el.addEventListener("pressedstarted", function(e) {
        if (e.target == teleButton) {
          // teleButton.setAttribute("position", "0 2 -1");

          var fingerx = handEl.components['hand-tracking-controls'].indexTipPosition.x
          var fingery = handEl.components['hand-tracking-controls'].indexTipPosition.y
          var fingerz = handEl.components['hand-tracking-controls'].indexTipPosition.z

          teleButton.setAttribute("position", { x: fingerx , y: fingery , z: fingerz});

          var jointsArray = handEl.components['hand-tracking-controls'].jointEls;

          // document.querySelector("#text3").setAttribute("value", "x: " + fingerx + " y: " + fingery+ " z: " + fingerz);
          document.querySelector("#text1").setAttribute("value", handEl.components['hand-tracking-controls'].jointEls[wrist]);
          document.querySelector("#text2").setAttribute("value", jointsArray[0].keys(jointsArray[0]));
          document.querySelector("#text3").setAttribute("value", jointsArray);
          

        
          // handEl.object3D.add(teleButton.object3D);
          }
        })
    },

    tick: function () { // every frame
    },    

  });
  

  