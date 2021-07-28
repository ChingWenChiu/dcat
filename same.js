var sidebar = document.getElementById("sidebar");
var menu = document.getElementById("menu");
var top = document.getElementById("top");
var com_menu = document.getElementById("com_menu");
var myAnchor = document.getElementsByClassName("myAnchor");

$(document).ready(function() {
    $('#top').click(function(){
        $('html,body').animate({scrollTop: $('.container').offset().top},500);
    });
});

function menuIn(){
    sidebar.style.display = "block";
    sidebar.style.opacity = "1";
    com_menu.style.pointerEvents = "none";
}

function menuOut(){
    sidebar.style.opacity = "0";
    com_menu.style.pointerEvents = "auto";
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
 
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function closeSide() {
    sidebar.style.opacity = "0";
    com_menu.style.pointerEvents = "auto";
}