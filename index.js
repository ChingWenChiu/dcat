var ramen = document.getElementById("ramen");
var woodd = document.getElementsByClassName("wood_up");
var popup1 =  document.getElementById("myPopup1");

function move(){
    ramen.style.right = "-30px";
    ramen.style.bottom = "40px";
}

function back(){
    ramen.style.right = "-50px";
    ramen.style.bottom = "20px";
}

function myFunction1(){
    popup1.style.display = "block";
}

function close1(){
    popup1.style.display = "none";
}

