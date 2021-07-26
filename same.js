var sidebar = document.getElementById("sidebar");
var menu = document.getElementById("menu");
var top = document.getElementById("top");


function pageScroll() {
    window.scrollBy(0,-150);
    scrolldelay = setTimeout("pageScroll()",100);
    if(document.documentElement.scrollTop == 0) clearTimeout(scrolldelay);
}

function menuIn(){
    sidebar.style.display = "block";
}

function menuOut(){
    sidebar.style.display = "none";
}


