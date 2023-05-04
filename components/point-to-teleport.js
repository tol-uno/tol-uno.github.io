/* global AFRAME, THREE */    // what?

AFRAME.registerComponent('point-to-teleport', {
    schema: {
      // pressDistance: { default: 0.06 }
    },
  
    init: function () {
      
      handEl = document.querySelector('[hand-tracking-controls]');
      
      console.log(handEl.components['hand-tracking-controls']);


      // CREATE BUTTON ENTITY
      var teleButton = document.createElement("a-entity");
      teleButton.setAttribute("id", "teleButton");
      teleButton.setAttribute("pressable", {pressDistance: "0.02"});
      teleButton.setAttribute("geometry", "primitive: sphere; radius: 0.02");
      teleButton.setAttribute("position", "0 1.3 -1");
      this.el.appendChild(teleButton);

      this.el.addEventListener("pressedstarted", function(e) {
        if (e.target == teleButton) {

          // MOVE TELE BUTTON TO FINGER
          var fingerx = handEl.components['hand-tracking-controls'].indexTipPosition.x
          var fingery = handEl.components['hand-tracking-controls'].indexTipPosition.y
          var fingerz = handEl.components['hand-tracking-controls'].indexTipPosition.z
          teleButton.setAttribute("position", { x: fingerx , y: fingery , z: fingerz});


          // DEBUG TEXT TRYING TO ACCESS JOINTS
          var jointsArray = handEl.components['hand-tracking-controls'].jointEls;
          document.querySelector("#text1").setAttribute("value", handEl.components['hand-tracking-controls'].jointEls[0]);
          document.querySelector("#text2").setAttribute("value", document.querySelector("#dom-xrhandjoint-wrist"));
          // document.querySelector("#text3").setAttribute("value", jointsArray); 

        
        }
      })
    },

    tick: function () { // every frame
    
    },    

  });
  

  