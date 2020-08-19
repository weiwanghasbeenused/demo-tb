var wW = window.innerWidth;
var wH = window.innerHeight;

var sLanding_section = document.getElementsByClassName('landing_section');
[].forEach.call(sLanding_section, function(el, i){
	el.classList.add('unviewed');
});
var sLanding_section_top = [];

var sLanding_content = document.getElementById('landing_content');
var sLanding_content_top;

var sLanding_ctner = document.getElementById('landing_ctner');
var sLanding_ctner_bottom = sLanding_ctner.offsetHeight;
var sNav = document.getElementById('nav');

var sTop = window.scrollY;
// var sTop_dev = - wH * 5 / 10;
// var sProject_origins_ctner_top = sProject_origins_ctner.offsetTop;
// var sHistory_section_ctner_top = [];
// var sCh_ctner_top = [];
// var sHistory_section_ctner = document.getElementsByClassName('history_section_ctner');

// var sCh_ctner = document.getElementsByClassName('ch_ctner');
// [].forEach.call(sCh_ctner, function(el){
// 	el.classList.add('unviewed');
// });


var nav_bg = false;
var viewing_section = 0;
var sTop_dev = 0.4 * wH;
var ticking = false;

window.addEventListener('load', function(){
	sLanding_content_top = sLanding_content.offsetTop;
	[].forEach.call(sLanding_section, function(el, i){
		var this_h = el.offsetTop;
		sLanding_section_top.push(sLanding_content_top + this_h + sTop_dev);
	});
	sLanding_ctner_bottom = sLanding_ctner.offsetHeight;
	scrollEvents();
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
