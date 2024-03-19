
const markers = {
    startColor: 'white',
    endColor: 'white',
    fontSize: '1.5em'
}

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.square', {
        x: 700,
        duration: 3,
        scrollTrigger: {
            trigger: '.square',
            start: 'top center',
            markers,
            end: 'bottom 30%',
            toggleClass: 'blue'
        }
    });
    gsap.to('.square2', {
        x: 350,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.square3',
            markers,
        }
    });
    gsap.to('.square3', {
        x: 400,
        duration: 1.5,
        scrollTrigger: {
            trigger: '.square3',
            markers,
            start: 'top 10%',
            end: 'bottom 20%',
            toggleActions: 'restart reverse none none',
            // onEnter onLeave onEnterBack onLeaveBack
            //  actions: play pause resume reverse restart complete none
        },

    });
    gsap.to('.box', {
        rotation: 360,
        duration: 2,
        scrollTrigger: {
            trigger: '.box',
            start: 'top center',
            markers,
            end: 'bottom 30%',
            toggleActions: 'restart reverse none none'
        }
    });
    gsap.to('.box2', {
        x: 1000,
        duration: 8,
        scrollTrigger: {
            trigger: '.box2',
            start: 'top center',
            end: 'bottom 30%',
            markers,
            toggleActions: 'restart none none none',
            toggleClass: 'blue',
            scrub: 4
        }
    });
    gsap.to('.pin', {
        rotation: 720,
        duration: 5,
        scrollTrigger: {
            // trigger: '.pin',
            trigger: '.section_light-blue',
            // start: 'top 30%',
            start: 'top top',
            end: () => `bottom ${document.querySelector('.pin').scrollHeight}`,
            markers,
            // toggleActions: 'restart none none none',
            scrub: true,
            // pin: true
            pin: '.pin',
            pinSpacing: false
        }
    });
});

