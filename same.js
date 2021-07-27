var sidebar = document.getElementById("sidebar");
var menu = document.getElementById("menu");
var top = document.getElementById("top");
var com_menu = document.getElementById("com_menu");

function pageScroll() {
    window.scrollBy(0,-150);
    scrolldelay = setTimeout("pageScroll()",100);
    if(document.documentElement.scrollTop == 0) clearTimeout(scrolldelay);
}

function menuIn(){
    com_menu.style.height = "375px";
    com_menu.style.width = "200px";
    sidebar.style.display = "block";
}

function menuOut(){
    sidebar.style.display = "none";
    com_menu.style.width = "35px";
    com_menu.style.height = "125px";
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
 
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


