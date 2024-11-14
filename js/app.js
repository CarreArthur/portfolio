
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





