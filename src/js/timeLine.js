
const markers = {
    fontSize: '1.5em'
}

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.box',
            markers,
            start: 'top 80%',
            end: 'bottom 30%',
            scrub: 1
        }
    });
    tl.to('.box', { x: 500, duration: 2 })
        .to('.box', { y: 500, duration: 3 })
        .to('.box', { x: 0, duration: 2 })
});

