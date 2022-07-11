$(document).ready(function(){
    $('#header').load('../header.html');
    $('#footer').load('../footer.html');

    $('#mainImg').css({
        backgroundSize: '100%',
    });

    scrollnormal('#contactInfoBox p:nth-child(1)');
    scrollnormal('#contactInfoBox p:nth-child(2)');
    scrollnormal('#contactInfoBox p:nth-child(3)');
    scrollnormal('#roadTextBox p:nth-child(1)');
    scrollnormal('#roadTextBox p:nth-child(2)');
    scrollnormal('#content02 h3');
    scrollnormal('#mailBox');

    gsap.set('#sendBtn', { opacity: 0, y: 70 });
    gsap.to('#sendBtn', {
        opacity: 1, duration: 1, y: 0,
        scrollTrigger: {
            trigger: '#sendBtn',
            start: "top 100%",
            end: "top 90%",
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
                end: "top 85%",
                scrub: 1,
                markers: false,
            }
        });
    }
    
});

function checkInfo(){
    let mailInfo = $('#ctMail').val();
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    if(!pattern.test(mailInfo)){
        $('.error').css({
            display: 'inline',
        });
        $('#ctMail').val("").focus();
    }
    return pattern.test(mailInfo);
};