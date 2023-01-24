function init(){
    var colored_box = document.querySelector("#colored_box");
    console.log("logged: " + colored_box.getAttribute("color"));
    colored_box.setAttribute("color", "purple");
    console.log("logged: " + colored_box.getAttribute("color"));

}

window.addEventListener("pinchstarted", function(e) {
    colored_box.setAttribute("color", "green");
})

// window.addEventListener("keydown", function(e) {
//     myGameArea.keys[e.key] = true;
// })
// window.addEventListener("keyup", function(e) {
//     myGameArea.keys[e.key] = false;
// })