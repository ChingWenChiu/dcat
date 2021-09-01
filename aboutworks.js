var sidebar = document.getElementById("sidebar");
var menu = document.getElementById("menu");
var top = document.getElementById("top");
var com_menu = document.getElementById("com_menu");
var myAnchor = document.getElementsByClassName("myAnchor");


$(document).ready(function () {
    $('.sub-title-1').click(function(){
        $("html,body").animate({ scrollTop: $('#multimedia').offset().top-120}, 800);

    });
    $('.sub-title-2').click(function(){
        $("html,body").animate({ scrollTop: $('#theses').offset().top-140}, 800);
        
    });
    $('#top').click(function(){
        $('html,body').animate({scrollTop: $('.main-works-page').offset().top},500);
    });

})

if($(window).width() > 768){
    
    $('.item').on('mouseover',brightItem)
    $('.item').on('mouseleave',unbrightItem)
    $('.sub-title a').on('mouseover',stmStart)
    $('.sub-title a').on('mouseleave',stmEnd)
}else{
    $('.item').on('touchstart',brightItem);
    $('.item').on('touchend',unbrightItem);
    $('.sub-title a').on('touchstart',stmStart);
    $('.sub-title a').on('touchend',stmEnd);
}


function menuIn(){
    sidebar.style.display = "block";
    sidebar.style.opacity = "1";
    sidebar.style.left='0';
    com_menu.style.pointerEvents = "none";
    $(".theses1").css("z-index", "3");
}

function menuOut(){
    sidebar.style.opacity ="0";
    sidebar.style.left='-100%';
    com_menu.style.pointerEvents = "auto";
    $(".theses1").css("z-index", "150");
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

function stmStart(){
    // console.log('tap')
    $(this).addClass("st-m-hover");
}

function stmEnd(){
    // console.log('leave')
    $(this).removeClass("st-m-hover");
}
function brightItem(){
    // console.log('in')
    $(this).siblings().addClass("filter");
}
function unbrightItem(){
    // console.log('out')
    $(this).siblings().removeClass("filter");
}
//防右鍵

window.oncontextmenu = function(event) {
    event.preventDefault()
    event.stopPropagation()
    return false
}

//防拖拉
window.ondragstart = function(event) {
    event.preventDefault()
    event.stopPropagation()
    return false
}
