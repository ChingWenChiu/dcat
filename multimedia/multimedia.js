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
        $( ".swiper-button-next" ).remove();
        $( ".swiper-button-prev" ).remove();
    }
    
})
//swiper.js start
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
swiper.setGrabCursor()
//swiper.js end

// moblie hover
$('.breadcrumb a').on("touchstart", bcmStart);
$(".breadcrumb a").on("touchend", bcmEnd);

function bcmStart(event) {
    console.log('touchstart')
    $(this).addClass("bc-m-hover");
}
function bcmEnd(event) {
    $(this).removeClass("bc-m-hover");
    console.log('touchend')
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

