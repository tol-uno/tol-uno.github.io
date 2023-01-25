var colored_box;
var text;

function init(){
    colored_box = document.querySelector("#colored_box");
    text = document.querySelector("a-text");

    console.log("logged: " + colored_box.getAttribute("color"));
    colored_box.setAttribute("color", "purple");
    console.log("logged: " + colored_box.getAttribute("color"));
    console.log("text: " + text.getAttribute("value"));
    text.setAttribute("value", "js init ran");
}

window.addEventListener("pinchstarted", function(e) {
    colored_box.setAttribute("color", "brown");
    text.setAttribute("value", "die die die die die");
    console.log(e);
})
