function init(){
    var colored_box = document.querySelector("#colored_box");
    var text = document.querySelector("a-text");

    console.log("logged: " + colored_box.getAttribute("color"));
    colored_box.setAttribute("color", "purple");
    console.log("logged: " + colored_box.getAttribute("color"));
    console.log("text: " + text.getAttribute("value"));
    text.setAttribute("value", "POOPY poopy");
}

window.addEventListener("pinchstarted", function(e) {
    colored_box.setAttribute("color", "green");
    text.setAttribute("value",e)
})
