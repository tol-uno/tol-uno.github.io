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

    // console.log("logged: " + colored_box.getAttribute("color"));
    colored_box.setAttribute("color", "purple");
    // console.log("logged: " + colored_box.getAttribute("color"));
    // console.log("text: " + text1.getAttribute("value"));
    text1.setAttribute("value", "text1 - getting id");
}



window.addEventListener("pinchstarted", function(e) {
    colored_box.setAttribute("color", "brown");
    text1.setAttribute("value", e);
    text2.setAttribute("value", e.target.id);
    text3.setAttribute("value", toString(e.target));
    console.log(e);
})
