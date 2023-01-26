var colored_box;
var text1;
var text2;
var text3;
var rightHand;

AFRAME.registerComponent("pinch-moveable", {
    schema: { 
    //   bar: {type: 'number'},
    //   baz: {type: 'string'}
    },
  
    init: function () {
        this.debugLevel = 16;

        text1 = document.querySelector("#text1");
        text2 = document.querySelector("#text2");
        text3 = document.querySelector("#text3");
        rightHand = document.querySelector("#rightHand");
    
        this.el.setAttribute("color", "purple");
        
        text1.components["debug-text"].updateText("text updated by cube");
        console.log(text1.components["debug-text"].debugLevel);

      // Do something when component first attached.
    },

    moveCube: function (moveTo) {
        console.log("moveCube ran");
        // console.log(this.el.components["position"].data.z);
        // this.el.setAttribute("position", "0 0 0");
        this.el.setAttribute("position", toString(moveTo));
    },

    update: function () {
    // Do something when component's data is updated.
    },
  
    remove: function () {
      // Do something when the component or its entity is detached.
    },
  
    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
  });


window.addEventListener("pinchstarted", function(e) {
    colored_box.setAttribute("color", "brown");
    text1.setAttribute("value", e);
    text2.setAttribute("value", e.target.id);
    text3.setAttribute("value", toString(e.target));

})

window.addEventListener("pinchmoved", function(e) {
    text1.setAttribute("value", "full detail:" + e.detail);
    text2.setAttribute("value", "full position:" + e.detail.position);
    text3.setAttribute("value", "just x cord:" + e.detail.position.x);
    document.querySelector("#colored_box").components["pinch-moveable"].moveCube(e.pinchEventDetail.position.x);
})