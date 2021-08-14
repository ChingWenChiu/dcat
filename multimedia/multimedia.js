$(document).ready(function () {
   
    $('#top').click(function(){
        $('html,body').animate({scrollTop: $('.main-multimedia-page').offset().top},500);
    });

    if($(window).width() > 768){
        console.log('>768')
        
        $('.btn1').click(function(){
            $("html,body").animate({ scrollTop: $('#concept').offset().top-120}, 800);
            
        });
        $('.btn2').click(function(){
            $("html,body").animate({ scrollTop: $('#content').offset().top-80}, 800);
            
        });
        $('.btn3').click(function(){
            $("html,body").animate({ scrollTop: $('#team').offset().top-80}, 800);
            
        });
        $('.btn4').click(function(){
            $("html,body").animate({ scrollTop: $('#adviser').offset().top-80}, 800);
            
        });
    }else{
        console.log('<768')
        $('.btn1').click(function(){
            $("html,body").animate({ scrollTop: $('#concept').offset().top-120}, 800);
            
        });
        $('.btn2').click(function(){
            $("html,body").animate({ scrollTop: $('#content').offset().top-120}, 800);
            
        });
        $('.btn3').click(function(){
            $("html,body").animate({ scrollTop: $('#team').offset().top-120}, 800);
            
        });
        $('.btn4').click(function(){
            $("html,body").animate({ scrollTop: $('#adviser').offset().top-120}, 800);
            
        });
    }
    
})

// auto slide 

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter =1;
    }
},5000);

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

