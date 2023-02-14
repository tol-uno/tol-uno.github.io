AFRAME.registerComponent("debug-text", {
    schema: {
    //   bar: {type: 'number'},
    //   baz: {type: 'string'}
    },
  
    init: function () {
        this.debugLevel = 69;
        // Do something when component first attached.
      
        this.el.sceneEl.addEventListener("pressedstarted", function(e) {
        // when entity with pressable starts being pressed 
        text1.setAttribute("value", "pressed red cube started");
        });
        this.el.sceneEl.addEventListener("pressedended", function(e) {
            // when entity with pressable stops being pressed 
            // text1.setAttribute("value", "NOT pressing red cube");
        });
    },
  
    updateText: function (text) {      // Update Text
        this.el.components.text.data.value = text
        console.log(document.querySelector("#colored_box").components["pinch-moveable"].debugLevel);
        document.querySelector("#colored_box").components["pinch-moveable"].moveCube("0.3 1.5 -1");
        // document.querySelector("#colored_box").components["pinch-moveable"].moveCube(2 + " " + 2 + " " + -2);
    },

    update: function () {      
    // Do something when component's data is updated. Also runs when initialized
    // console.log(document.querySelector("#colored_box").components["pinch-moveable"].data.debugLevel);
    console.log("update func from debug text");
    },
  
    remove: function () {
      // Do something when the component or its entity is detached.
    },
  
    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
  });