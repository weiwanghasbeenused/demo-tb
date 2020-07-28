var wW = window.innerWidth;
var wH = window.innerHeight;

var sProject_origins_ctner = document.getElementById('project_origins_ctner');
sProject_origins_ctner.classList.add('unviewed');
var sTop = window.scrollY;
var sTop_dev = - wH * 5 / 10;
var sProject_origins_ctner_top = sProject_origins_ctner.offsetTop;
var viewing_section = 0;
var ticking = false;
console.log(sProject_origins_ctner_top);

window.addEventListener('load', function(){
	sProject_origins_ctner_top = sProject_origins_ctner.offsetTop;

});
window.addEventListener('scroll', onScroll, false);


function onScroll() {
	sTop = window.scrollY;
	requestTick();
}

function requestTick() {
	if(!ticking) {
		requestAnimationFrame(function(){
			if(sTop < sProject_origins_ctner_top + sTop_dev){
				if(viewing_section != 0){
					viewing_section = 0;
					sProject_origins_ctner.classList.add('unviewed');
				}
			}
			else if(sTop >= sProject_origins_ctner_top + sTop_dev){
				if(viewing_section != 1){
					viewing_section = 1;
					sProject_origins_ctner.classList.remove('unviewed');
				}
			}
			ticking = false;
		});
	}
	ticking = true;
}