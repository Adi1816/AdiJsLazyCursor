window.addEventListener('mousemove', function(details){
    var circle = document.querySelector("#rect");

    var xval = gsap.utils.mapRange(0,
        window.innerWidth,
        105 + circle.getBoundingClientRect().width/2,
        window.innerWidth - (105 + circle.getBoundingClientRect().width/2),
        details.clientX);
        
    var yval = gsap.utils.mapRange(0,
        window.innerHeight,
        50 + circle.getBoundingClientRect().height/2,
        window.innerHeight - (50 + circle.getBoundingClientRect().height/2),
        details.clientY);

    gsap.to('#rect', {
        top: yval + 'px',
        left: xval + 'px',
        ease: Power3,
    })
})