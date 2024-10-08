function showResponsiveMenu() {
    var menu = document.getElementById("topnav_responsive_menu");
    var icon = document.getElementById("topnav_hamburger_icon");
    var body = document.body;
    
    if (menu.classList.contains("open")) {
   
        menu.classList.remove("open");
        icon.classList.remove("open");
        body.classList.remove("no-scroll"); 
    } else {
        menu.classList.add("open");
        icon.classList.add("open");
        body.classList.add("no-scroll"); 
    
}


}


function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = "block";
    let last = +new Date();
    const tick = function() {
        element.style.opacity = +element.style.opacity + (new Date() - last) / 1000;
        last = +new Date();
        if (+element.style.opacity < 1) {
            requestAnimationFrame(tick);
        }
    };
    tick();
}


// Utilisation
const myElement = document.getElementById('myElement');
fadeIn(myElement); // Pour faire apparaître


