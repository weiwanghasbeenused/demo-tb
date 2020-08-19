var wW = window.innerWidth;
var wH = window.innerHeight;

var body = document.body;

var sLanding_section = document.getElementsByClassName('landing_section');
[].forEach.call(sLanding_section, function(el, i){
	el.classList.add('unviewed');
});
var sLanding_section_top = [];

var sOpening_logo = document.getElementById('opening_logo');
var sOpening_logo_top = sOpening_logo.offsetTop - (sOpening_logo.offsetHeight / 2) - 40;

var sLanding_content = document.getElementById('landing_content');
var sLanding_content_top;

var sLanding_ctner = document.getElementById('landing_ctner');
var sLanding_ctner_bottom = sLanding_ctner.offsetHeight;
var sNav = document.getElementById('nav');

var sTop = window.scrollY;

var nav_bg = false;
var logo_toggle = false;
var viewing_section = 0;
var sTop_dev = 0.4 * wH;
var ticking = false;

window.addEventListener('load', function(){

	sOpening_logo_top = sOpening_logo.offsetTop - (sOpening_logo.offsetHeight / 2) - 40;
	sLanding_content_top = sLanding_content.offsetTop;
	[].forEach.call(sLanding_section, function(el, i){
		var this_h = el.offsetTop;
		sLanding_section_top.push(sLanding_content_top + this_h + sTop_dev);
	});
	sLanding_ctner_bottom = sLanding_ctner.offsetHeight;
	// setTimeout(scrollEvents, 0);
});
window.addEventListener('scroll', onScroll, false);


function onScroll() {
	sTop = window.scrollY;
	requestTick();
}

function requestTick() {
	if(!ticking) {
		requestAnimationFrame(function(){
			scrollEvents();
			ticking = false;
		});
	}
	ticking = true;
}

function scrollEvents(){
	if(sTop < sOpening_logo_top){
		console.log(logo_toggle);
		if(logo_toggle){
			logo_toggle = false;
			body.classList.remove('logo_toggle');
		}
	}
	else{
		if(!logo_toggle){
			logo_toggle = true;
			body.classList.add('logo_toggle');
		}
	}

	if(sTop < sLanding_ctner_bottom - 30 ){
		if(nav_bg){
			nav_bg = false;
			sNav.classList.remove('bg');
		}
	}
	else if(sTop >= sLanding_ctner_bottom - 30 ){
		if(!nav_bg){
			nav_bg = true;
			sNav.classList.add('bg');
		}
	}
	if(sTop < sLanding_section_top[0]){
		if(viewing_section != 0){
			viewing_section = 0;
			sLanding_section[0].classList.add('unviewed');
		}
	}
	else if(sTop < sLanding_section_top[1]){
		if(viewing_section != 1){
			viewing_section = 1;
			sLanding_section[0].classList.remove('unviewed');
			sLanding_section[1].classList.add('unviewed');
		}
	}
	else if(sTop >= sLanding_section_top[1]){
		if(viewing_section != 2){
			viewing_section = 2;
			sLanding_section[1].classList.remove('unviewed');
		}
	}
}
