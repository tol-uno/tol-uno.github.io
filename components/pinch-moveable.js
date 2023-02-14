AFRAME.registerComponent("pinch-moveable", {
    schema: { 
    //   bar: {type: 'number'},
    //   baz: {type: 'string'}
    },
  
    init: function () {       // Do something when component first attached.
        this.debugLevel = 16;

        var text1 = document.querySelector("#text1");
        var text2 = document.querySelector("#text2");
        var text3 = document.querySelector("#text3");
           
        text1.components["debug-text"].updateText("cube move?");
        console.log(text1.components["debug-text"].debugLevel);


        
        this.el.sceneEl.addEventListener("pinchstarted", function(e) {
            // do something when pinch starts anywhere
            text1.setAttribute("value", "pinch started");

        });
        
        this.el.sceneEl.addEventListener("pinchmoved", function(e) {
            // text1.setAttribute("value", "z: " + e.detail.position.z);
            text2.setAttribute("value", "y: " + e.detail.position.y);
            text3.setAttribute("value", "x: " + e.detail.position.x);
            document.querySelector("#colored_box").components["pinch-moveable"].moveCube(e.detail.position.x + " " + e.detail.position.y + " " + e.detail.position.z);
        });

    },

    moveCube: function (moveTo) {
        console.log("moveCube to: " + moveTo);
        // console.log(this.el.components["position"].data.z);
        // this.el.setAttribute("position", "0 0 0");
        this.el.setAttribute("position", moveTo);
    },

    update: function () {
    // Do something when component's data is updated. and when component is first added
    },

    remove: function () {
      // Do something when the component or its entity is detached.
    },
  
    tick: function (time, timeDelta) {
      // // Do something on every scene tick or frame.
      // var handEls = this.handEls;
      // var handEl;
      // var distance;
      // for (var i = 0; i < handEls.length; i++) { // loop through (2) hands-tracking-controls
      //   handEl = handEls[i];
      //   distance = this.calculateFingerDistance(handEl.components['hand-tracking-controls'].indexTipPosition);
      //   if (distance < this.data.pressDistance) { //if within press distance
      //     if (!this.pressed) { this.el.emit('pressedstarted'); }    // if not yet pressed. emit event
      //     this.pressed = true;                                      // make sure pressed is true
      //     return;                                                   // return exits whole function
      //   }
    }

  });