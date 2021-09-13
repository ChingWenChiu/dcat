$(document).ready(function () {
   
    $('#top').click(function(){
        $('html,body').animate({scrollTop: $('.main-multimedia-page').offset().top},500);
    });

    if($(window).width() > 768){
        console.log('>768')
        
        $('.btn1').click(function(){
            $("html,body").animate({ scrollTop: $('#concept').offset().top-80}, 800);
            // offset -120
        });
        $('.btn2').click(function(){
            $("html,body").animate({ scrollTop: $('#abstract').offset().top-80}, 800);
            
        });
        $('.btn3').click(function(){
            $("html,body").animate({ scrollTop: $('#author').offset().top-80}, 800);
            
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
            $("html,body").animate({ scrollTop: $('#abstract').offset().top-120}, 800);
            
        });
        $('.btn3').click(function(){
            $("html,body").animate({ scrollTop: $('#author').offset().top-120}, 800);
            
        });
        $('.btn4').click(function(){
            $("html,body").animate({ scrollTop: $('#adviser').offset().top-120}, 800);
            
        });
        //remove ugly btn
        $( ".swiper-button-next" ).remove();
        $( ".swiper-button-prev" ).remove();
    }
    
})


// moblie hover
$('.breadcrumb a').on("touchstart", bcmStart);
$(".breadcrumb a").on("touchend", bcmEnd);

function bcmStart(event) {
    $(this).addClass("bc-m-hover");
}
function bcmEnd(event) {
    $(this).removeClass("bc-m-hover");
}

//防右鍵

// window.oncontextmenu = function(event) {
//     event.preventDefault()
//     event.stopPropagation()
//     return false
// }

//防拖拉
window.ondragstart = function(event) {
    event.preventDefault()
    event.stopPropagation()
    return false
}