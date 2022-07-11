$(document).ready(function(){
    $('#header').load('../header.html');
    $('#footer').load('../footer.html');

    $('#mainImg').css({
        backgroundSize: '100%',
    });

    scrollnormal('#content02 h3');
    scrollleft('#content02 p');
    scrollright('#content02 img');
    gsap.set('#content03 img', { opacity: 0, y: 100 });
    gsap.set('#content01 p:last-child', { opacity: 0, y: 70 });
    gsap.to('#content03 img', {
        opacity: 1, duration: 1, y: 0,
        scrollTrigger: {
            trigger: '#content03 img',
            start: "top 70%",
            end: "top 50%",
            scrub: 1,
            markers: false,
        }
    });
    gsap.to('#content01 p:last-child', {
        opacity: .6, duration: 1, y: 0,
        scrollTrigger: {
            trigger: '#content01 p:last-child',
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
            markers: false,
        }
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