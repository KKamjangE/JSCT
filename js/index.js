$(document).ready(function(){
    $("#header").load("../header.html");
    $("#footer").load("../footer.html");

    
    $('#mainImg').css({
        backgroundSize: '100%',
    });


    $(window).scroll(function(){
        if(300<$(document).scrollTop()){
            $("#scrollCenter").css({
                opacity: 0,
            });
        }else{
            $("#scrollCenter").css({
                opacity: '1',
            });
        }
    });

    $('.scrolldown').on('click', function(){
        $('html').animate({
            scrollTop: '800',
        }, 800);
    });



    setInterval(function(){
        $('.swiper-button-next').trigger('click');
    }, 2000);

    scrollnormal("#content01 .content_title");
    scrollnormal("#content01 .content_text");
    scrollnormal("#content02 .content_title");
    scrollnormal("#content02 .content_text");
    scrollnormal("#content03 .content_title");
    scrollnormal("#content03 .content_text");
    scrollleft('#sec02 #img_sec');
    scrollright('#sec02 h3');
    scrollleft('#sec03 h3');
    scrollright('#sec03 #img_sec');
    scrollnormal('#content04 h3');
    scrollnormal('#sec04');
    scrollnormal("#content05 .content_title");
    scrollnormal("#content05 .content_text");
    scrollnormal("#sec05 img");
    scrollnormal("#sec05 button");

    gsap.set('.businessCard:nth-child(1)', { opacity: 0, y: 70 });
    gsap.set('.businessCard:nth-child(2)', { opacity: 0, y: 80 });
    gsap.set('.businessCard:nth-child(3)', { opacity: 0, y: 90 });
    gsap.set('.businessCard:nth-child(4)', { opacity: 0, y: 100 });
    gsap.to('.businessCard:nth-child(1)', {
        opacity: 1, duration: 1, y: 0,
        scrollTrigger: {
            trigger: '.businessCard:nth-child(1)',
            start: "10% bottom",
            end: "top 80%",
            scrub: 1,
            markers: false,
        }
    });    
    gsap.to('.businessCard:nth-child(2)', {
        opacity: 1, duration: 1, y: 0,
        scrollTrigger: {
            trigger: '.businessCard:nth-child(2)',
            start: "30% bottom",
            end: "top 70%",
            scrub: 1,
            markers: false,
        }
    });    
    gsap.to('.businessCard:nth-child(3)', {
        opacity: 1, duration: 1, y: 0,
        scrollTrigger: {
            trigger: '.businessCard:nth-child(3)',
            start: "50% bottom",
            end: "top 60%",
            scrub: 1,
            markers: false,
        }
    });    
    gsap.to('.businessCard:nth-child(4)', {
        opacity: 1, duration: 1, y: 0,
        scrollTrigger: {
            trigger: '.businessCard:nth-child(4)',
            start: "70% bottom",
            end: "top 50%",
            scrub: 1,
            markers: false,
        }
    });    

});
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
function scrollnormal(target){
    gsap.set(target, { opacity: 0, y: 70 });
    gsap.to(target, {
        opacity: 1, duration: 1, y: 0,
        scrollTrigger: {
            trigger: target,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
            markers: false,
        }
    });
}
function scrollleft(target){
    gsap.set(target, { opacity: 0, x: -100 });
    gsap.to(target, {
        opacity: 1, duration: 1, x: 0,
        scrollTrigger: {
            trigger: target,
            start: "top 75%",
            end: "top 60%",
            scrub: 1,
            markers: false,
        }
    });
}
function scrollright(target){
    gsap.set(target, { opacity: 0, x: 100 });
    gsap.to(target, {
        opacity: 1, duration: 1, x: 0,
        scrollTrigger: {
            trigger: target,
            start: "top 75%",
            end: "top 60%",
            scrub: 1,
            markers: false,
        }
    });
}