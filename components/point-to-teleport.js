/* global AFRAME, THREE */    // what?
AFRAME.registerComponent('point-to-teleport', {
    schema: {
      // pressDistance: { default: 0.06 }
    },
  
    init: function () {
      
      handEl = document.querySelector('[hand-tracking-controls]');
      
      console.log(handEl.components['hand-tracking-controls']);


      var teleButton = document.createElement("a-entity");
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
          document.querySelector("#text1").setAttribute("value", handEl.components['hand-tracking-controls'].jointEls.length);
          document.querySelector("#text2").setAttribute("value", handEl.components['hand-tracking-controls'].jointEls[0].values);
          document.querySelector("#text3").setAttribute("value", showProps(jointsArray[0], "jointsArray[0]");
          

        
          // handEl.object3D.add(teleButton.object3D);
          }
        })
    },

    tick: function () { // every frame

    },

    showProps: function (obj, objName) {
      let result = "";
      for (const i in obj) {
        // Object.hasOwn() is used to exclude properties from the object's
        // prototype chain and only show "own properties"
        if (Object.hasOwn(obj, i)) {
          result += `${objName}.${i} = ${obj[i]}\n`;
        }
      }
      console.log(result);
    }
    

  });
  

  