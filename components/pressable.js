/* global AFRAME, THREE */ // what?
AFRAME.registerComponent('pressable', {
    schema: {
      pressDistance: { default: 0.06 }
    },
  
    init: function () {
      this.worldPosition = new THREE.Vector3();
      this.handEls = document.querySelectorAll('[hand-tracking-controls]');
      this.pressed = false;

    //   this.el.emit('pressedended');
    //   console.log("tried to emit pinchmoved");
    },
  
    tick: function () { // every frame
      var handEls = this.handEls;
      var handEl;
      var distance;
      for (var i = 0; i < handEls.length; i++) { // loop through (2) hands-tracking-controls
        handEl = handEls[i];
        distance = this.calculateFingerDistance(handEl.components['hand-tracking-controls'].indexTipPosition);
        if (distance < this.data.pressDistance) { //if within press distance
          if (!this.pressed) { this.el.emit('pressedstarted'); }    // if not yet pressed. emit event
          this.pressed = true;                                      // make sure pressed is true
          return;                                                   // return exits whole function
        }
      }
      if (this.pressed) { this.el.emit('pressedended'); }   // this only runs if return distance is too large for both hands
      this.pressed = false;
    },
  
    calculateFingerDistance: function (fingerPosition) { // gets distance between button and index finger
      var el = this.el; // entity that has this component attached
      var worldPosition = this.worldPosition; // position of button
  
      worldPosition.copy(el.object3D.position); //idk whats really goin on here. Some threejs stuff
      el.object3D.parent.updateMatrixWorld();
      el.object3D.parent.localToWorld(worldPosition);
  
      return worldPosition.distanceTo(fingerPosition);
    }
  });
  