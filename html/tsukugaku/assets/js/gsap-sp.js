gsap.to("#about-img2", {
	opacity: 1,
	scale: 1,
  	ease: "linear",
	duration: 2,
	scrollTrigger: {
    	trigger: "#section02",
		scrub: true,
		start: 'top 100%',
		end: 'top 10%',
	}
});

gsap.to("#about-img1", {
	opacity: 1,
	x:-100,
	y:150,
	rotation: -10,
  	ease: "linear",
	duration: 2,
	scrollTrigger: {
    	trigger: "#section02",
		scrub: true,
		start: 'top 100%',
		end: 'top 10%',
	}
});



gsap.to("#about-img3", {
	opacity: 1,
	x:300,
	y:100,
	rotation: 10,
  	ease: "linear",
	duration: 2,
	scrollTrigger: {
    	trigger: "#section02",
		scrub: true,
		start: 'top 100%',
		end: 'top 10%',
	}
});

gsap.to("#course-left", {
	opacity: 1,
	x:300,
  	ease: "linear",
	duration: 2,
	scrollTrigger: {
    	trigger: "#section03",
		scrub: true,
		start: 'top 100%',
		end: 'top 10%',
	}
});

gsap.to("#course-right", {
	opacity: 1,
	x:-300,
  	ease: "linear",
	duration: 2,
	scrollTrigger: {
    	trigger: "#section03",
		scrub: true,
		start: 'top 100%',
		end: 'top 10%',
	}
});

gsap.to(".major-img-human", {
	opacity: 1,
  	ease: "linear",
	duration: 2,
	scrollTrigger: {
    	trigger: ".major-img-human",
		scrub: true,
		start: 'top 100%',
		end: 'top 40%',
	}
});

gsap.to(".major-img-social", {
	opacity: 1,
  	ease: "linear",
	duration: 2,
	scrollTrigger: {
    	trigger: ".major-img-social",	
		scrub: true,
		start: 'top 100%',
		end: 'top 40%',
	}
});


gsap.to(".major-img-business", {
	opacity: 1,
  	ease: "linear",
	duration: 2,
	scrollTrigger: {
    	trigger: ".major-img-business",
		scrub: true,
		start: 'top 100%',
		end: 'top 50%',
	}
});


gsap.to(".major-img-design", {
	opacity: 1,
  	ease: "linear",
	duration: 2,
	scrollTrigger: {
    	trigger: ".major-img-design",
		scrub: true,
		start: 'top 100%',
		end: 'top 50%',
	}
});
