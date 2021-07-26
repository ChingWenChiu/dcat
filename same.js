var sidebar = document.getElementById("sidebar");
var menu = document.getElementById("menu");
var top = document.getElementById("top");


function pageScroll() {
    window.scrollBy(0,-150);
    scrolldelay = setTimeout("pageScroll()",100);
    if(document.documentElement.scrollTop == 0) clearTimeout(scrolldelay);
}



// menu.onclick = function (){
//     alert("hi");
// }



// function(){
//     sidebar.style.width = "100%";
//     sidebar.style.display = "block";
// }

// function(){
//     sidebar.style.width = "0";
//     sidebar.style.display = "none";
// }


