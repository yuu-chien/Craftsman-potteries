// 首頁滾動
$(window).scroll(function () {
    let scrollVal = $(this).scrollTop();
    if (scrollVal==0) {
        $(".logo").removeClass("txt-white").addClass("dark");
        $(".navbar").css("background-color","transparent");
    }else if (scrollVal>0) {
        $(".logo").removeClass("dark").addClass("txt-white");
        $(".navbar").css("background","#0000009A");
    }
});

// 插件 owl-carousel 設定
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})