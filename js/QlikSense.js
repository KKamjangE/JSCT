$(document).ready(function(){
    $('#header').load('../header.html');
    $('#footer').load('../footer.html');

    $('#mainImg').css({
        backgroundSize: '100%',
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
});