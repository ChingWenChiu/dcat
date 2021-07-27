var sidebar = document.getElementById("sidebar");
var menu = document.getElementById("menu");
var top = document.getElementById("top");
var com_menu = document.getElementById("com_menu");

$(document).ready(function() {
    $('#top').click(function(){
        $('html,body').animate({scrollTop: $('.container').offset().top},500);
    });
});

function menuIn(){
    sidebar.style.width = "200px";
    sidebar.style.height = "375px";
    sidebar.style.opacity = "1";
    sidebar.style.display = "block";
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