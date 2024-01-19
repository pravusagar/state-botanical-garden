// used Gsap versiom v-3.12.2
gsap.registerPlugin(ScrollTrigger);

let tl =gsap.timeline({
  scrollTrigger:{
    trigger:'.text-gsap',
    start:'-300px center',
    end:'100px 400px',
    scrub:true,
    //  markers:true,
  }
});

tl.from('.text-gsap',{
  x: "-100%", 
  opacity: 0,
  color:'green'
})

let imageTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.image-gsap',
    start: '-320px center',
    end: 'center 500px',
    scrub: true,
    // markers:true,
  }
});

imageTimeline.from('.image-gsap', {
  x: '100%',
  opacity: 0,
  scale: 0,
  stagger: ".3",
});
let special = gsap.timeline({
  scrollTrigger: {
    trigger: '.special-gsap',
    start: '-200px center',
    end: '150px 400px',
    scrub: true,
    // markers:true,
  }
});

special.from('.special-gsap', {
  x: '200%',
  opacity: 0,
  scale: 0,
  stagger: ".1",
});
let specialleft = gsap.timeline({
  scrollTrigger: {
    trigger: '.special-gsap-left',
    start: '-800px 200px',
    end: '-400px 400px',
    scrub: true,
    // markers:true,
  }
});

specialleft.from('.special-gsap-left', {
  y: '100%',
  opacity: 0,
  scale: 0,
  stagger: ".2",
});


let galery = gsap.timeline({
  scrollTrigger: {
    trigger: '.galery-gsap',
    start: '-750px 200px',
    end: '-300px 400px',
    scrub: true,
    //  markers:true,
  }
});

galery.from('.galery-gsap', {
  y: '100%',
  rotation: 360,
  opacity: 0,
  scale: 0,
  stagger: ".1",
});



// special-gsap
gsap.from(".timeing-gsap", {
  duration: 2,
  x: "-100%",
  opacity: 0,
  ease: "bounce.out",
  delay: 3,
});

gsap.from(".email-gsap", {
  duration: 2,
  x: "100%",
  opacity: 0,
  ease: "bounce.out",
  delay: 3,
});

gsap.from(".logo-gsap", {
  duration: 3,
  x: "100%",
  opacity: 0,
  ease: "power4.out",
  stagger: ".5",
//   rotation: 360,
//   yoyo:true,
//   repeat: 2,
});


// gsap.from(".menu-box-gsap", {
//     duration:3,
//     x:"-100%",
//     opacity: 0,
//     ease: "power4.out",
//     // delay: .5,
//   });


gsap.from(".menu-gsap", {
  duration: .5,
  y: "-100%",
  opacity: 0,
  ease: "power2.out",
  stagger: ".2",
  delay: 1.5,
});

gsap.from(".book-now-btn-gsap", {
    duration: 2,
    scale:1.5,
    opacity: 0,
    ease: "bounce.out",
    delay: 2,
  });

  

gsap.from(".floting-box-gsap", {
    duration: 2,
    y: "-300%",
    opacity: 0,
    ease: "bounce.out",
    delay: 3,
  });
 


 //smooth scroll
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 500) // adjust smoothness of mouse scroll
})

gsap.ticker.lagSmoothing(0)
