var colored_box;
var text1;
var text2;
var text3;
var rightHand;

function init(){
    colored_box = document.querySelector("#colored_box");
    text1 = document.querySelector("#text1");
    text2 = document.querySelector("#text2");
    text3 = document.querySelector("#text3");
    rightHand = document.querySelector("#rightHand");

    colored_box.setAttribute("color", "purple");
    text1.setAttribute("value", "GETTING PITCH POSITION");
}



window.addEventListener("pinchstarted", function(e) {
    colored_box.setAttribute("color", "brown");
    text1.setAttribute("value", e);
    text2.setAttribute("value", e.target.id);
    text3.setAttribute("value", toString(e.target));
})

window.addEventListener("pinchmoved", function(e) {
    text1.setAttribute("value", "full detail:" + e.pinchEventDetail);
    text2.setAttribute("value", "full position:" + e.pinchEventDetail.position);
    text3.setAttribute("value", "just x cord:" + e.pinchEventDetail.position.x);
    colored_box.position = e.pinchEventDetail.position;
})