gsap.to(".branding", {duration: 3, x: 22});

gsap.from(".hover", {duration: 3, x: 100});

let tween = gsap.from(".titulo-cabeza",{duration:1, y: -200, scale: 0,stagger: 0.5, delay:1 })

let primer = gsap.from(".primer",{duration:1, y: 200, scale: 0,stagger: 0.5, delay:2 })

let segundo = gsap.from(".segundo",{duration:1, y: -200, scale: 0,stagger: 0.5, delay:3 })

let tercer = gsap.from(".tercer",{duration:1, y: 200, scale: 0,stagger: 0.5, delay:4 })
