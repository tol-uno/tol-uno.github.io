var colored_box;
var text;
var rightHand;

function init(){
    colored_box = document.querySelector("#colored_box");
    text = document.querySelector("a-text");
    rightHand = document.querySelector("#rightHand");

    console.log("logged: " + colored_box.getAttribute("color"));
    colored_box.setAttribute("color", "purple");
    console.log("logged: " + colored_box.getAttribute("color"));
    console.log("text: " + text.getAttribute("value"));
    text.setAttribute("value", "text show event");

    rightHand.dispatchEvent("pinchstarted");
}



window.addEventListener("pinchstarted", function(e) {
    colored_box.setAttribute("color", "brown");
    text.setAttribute("value", toString(e));
    console.log(e);
})
