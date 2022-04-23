// Pin the header 
const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: '.header',
    start: '0%',
    end: '100%',
    pin: true,
    pinSpacing: false,
  }
})

// Highlihgt Smoke section
const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: '.second-page',
    scrub: true,
    start: '-40%',
    end: '40%',
  }
})
tlH.fromTo('.highlight', 
  {color: 'rgba(255, 255, 255, 0.4)'}, 
  {color: 'rgba(255, 255, 255, 1)', stagger: 1}
)

const tlHRemove = gsap.timeline({
  scrollTrigger: {
    trigger: '.second-page',
    scrub: true,
    start: '-20%',
    end: '60%',
  }
})
tlH.to('.highlight', {color: 'rgba(255, 255, 255, 0.4)', stagger: 1})

// Product image
const tlSplite = gsap.timeline({
  scrollTrigger: {
    trigger: '.product',
    start: '-25%',
    end: '30%',
    scrub: true,
  } 
})
tlSplite.fromTo('.large-phone', {x: '45%'}, {x: '30%'});
tlSplite.fromTo('.small-phone', {x: '-45%'}, {x: '-30%'}, '<');
tlSplite.fromTo('.product-text-left', {x: 50, opacity: 0}, {opacity: 1, x: 0}, '<')
tlSplite.fromTo('.product-text-right', {x: -50, opacity: 0}, {opacity: 1, x: 0}, '<')

const tlSplitePin = gsap.timeline({
  scrollTrigger: {
    trigger: '.product',
    pin: true,
    pinSpacing: false,
    start: '0%',
    end: '100%'
  }
})
// Carousel
const swatches = document.querySelectorAll('.swatches img');
const gallery = document.querySelector('.phone-gallery')
const slides = document.querySelectorAll('.phone-gallery-container');

let currentSwatch = 'blue';
let topIndex = 2
swatches.forEach((swatch, key) => {
  const coord = slides[key].getBoundingClientRect().left;
  swatch.addEventListener('click', (e) => {
    let swatchName = e.target.getAttribute('swatch')
    let closeUp = document.querySelector(`.${swatchName}`)
    // Check if we are on the same swatch
    if(currentSwatch === swatchName) return;
    
    gsap.set(closeUp, {zIndex: topIndex})
    gsap.fromTo(closeUp, {opacity: 0}, {opacity: 1, duration: 1})
    // Gallery
    gsap.to(gallery, {x: -coord, duration: 1, ease: 'back.out(1)'})
    // Increment zIndex
    topIndex++
    currentSwatch = swatchName
  })
})
// Video on scroll
const tlVideo = gsap.timeline({
  scrollTrigger: {
    trigger: '.video-scroll',
    start: '0%',
    end: '150%',
    scrub: true,
    pin: true,
  }
})
tlVideo.fromTo('.product-video', {currentTime: 0}, {currentTime: 3, duration: 1})
tlVideo.fromTo('.product-info-container h3', {opacity: 0}, {opacity: 1, stagger: 0.25, duration: 0.5}, '<')

// Footer Parallax
const tlParallax = gsap.timeline({
  scrollTrigger: {
    trigger: '.footer',
    start: '-25%',
    end: '50%',
    scrub: true,
  }
})
tlParallax.fromTo('.photo-description', {y: 0}, {y: -80})
tlParallax.fromTo('.portrait-container', {y: 0}, {y: -100}, '<')
tlParallax.fromTo('.phone-video', {y: 0}, {y: -200}, '<')









