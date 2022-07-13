$(document).ready(function(){
    $('#header').load('../header.html');
    $('#footer').load('../footer.html');

    $('#mainImg').css({
        backgroundSize: '100%',
    });
    
    // $('.morePopBg, .morePop').on('scroll touchmove mousewheel', function(e){
    //     e.preventDefault()
    //     e.stopPropagation()
    //     return false
    // });

    $('.closeBtn').on('click', ()=>{
        $('.morePopBg').css({
            display: 'none'
        })
        $('.morePop').css({
            display: 'none'
        })
        $('body').css({
            overflow: 'auto'
        })
    });
    
    $('.morePopBg').on('click', function(){
        $('.morePopBg').css({
            display: 'none'
        })
        $('.morePop').css({
            display: 'none'
        })
        $('body').css({
            overflow: 'auto'
        })
    });

    gsap.set('#sec02 .learnMore:nth-child(1)', { opacity: 0, y: 70 });
    gsap.set('#sec02 .learnMore:nth-child(2)', { opacity: 0, y: 80 });
    gsap.set('#sec02 .learnMore:nth-child(3)', { opacity: 0, y: 90 });
    gsap.set('#sec02 .learnMore:nth-child(4)', { opacity: 0, y: 100 });
    gsap.to('#sec02 .learnMore:nth-child(1)', {
        opacity: 1, duration: 1, y: 0,
        scrollTrigger: {
            trigger: '#sec02 .learnMore:nth-child(1)',
            start: "top 100%",
            end: "top 90%",
            scrub: 1,
            markers: false,
        }
    });
    gsap.to('#sec02 .learnMore:nth-child(2)', {
        opacity: 1, duration: 1, y: 0,
        scrollTrigger: {
            trigger: '#sec02 .learnMore:nth-child(1)',
            start: "top 100%",
            end: "top 80%",
            scrub: 1,
            markers: false,
        }
    });
    gsap.to('#sec02 .learnMore:nth-child(3)', {
        opacity: 1, duration: 1, y: 0,
        scrollTrigger: {
            trigger: '#sec02 .learnMore:nth-child(1)',
            start: "top 100%",
            end: "top 70%",
            scrub: 1,
            markers: false,
        }
    });
    gsap.to('#sec02 .learnMore:nth-child(4)', {
        opacity: 1, duration: 1, y: 0,
        scrollTrigger: {
            trigger: '#sec02 .learnMore:nth-child(1)',
            start: "top 100%",
            end: "top 60%",
            scrub: 1,
            markers: false,
        }
    });

    $('.learnMore').on('click', function(){
        let scrollVal = $(document).scrollTop();
        console.log(scrollVal);
        $('html').css({
            scrollTop: '+'+scrollVal+'px'
        });
        $('body').css({
            overflow: 'hidden'
        })
    });
});

function popOn(pop){
    $(pop).css({
        display: 'flex'
    })
    $('.morePopBg').css({
        display: 'block'
    })
}

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