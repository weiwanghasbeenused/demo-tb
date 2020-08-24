var wW = window.innerWidth;
var wH = window.innerHeight;

// var sProject_origins_ctner = document.getElementById('project_origins_ctner');
// sProject_origins_ctner.classList.add('unviewed');
var sHistory_content_ctner = document.getElementById('history_content_ctner');
var sPage_intro = document.getElementsByClassName('page_intro')[0];
var sNav = document.getElementById('nav');
var sTop = window.scrollY;

var nav_bg = false;
var nav_toggle_h = sPage_intro.offsetHeight + sPage_intro.offsetTop;

var sTop_dev = - wH * 5 / 10;
var sTop_dev_section = - wW * 2.5 / 10;
var sHistory_content_ctner_h = sHistory_content_ctner.offsetTop;
var sHistory_section_ctner_top = [];
var sCh_ctner_top = [];
var sHistory_section_ctner = document.getElementsByClassName('history_section_ctner');
[].forEach.call(sHistory_section_ctner, function(el, i){
	el.classList.add('unviewed-section');
});
var sCh_ctner = document.getElementsByClassName('ch_ctner');
[].forEach.call(sCh_ctner, function(el){
	el.classList.add('unviewed');
	// var this_history_section = el.querySelectorAll('.history_section');
	// [].forEach.call(sCh_ctner, function(sec, i){
	// 	if(i != 0)
	// 		el.classList.add('unviewed-section');
	// });
});


var viewing_section = 0;
var viewing_history_section = 0;
var ticking = false;

window.addEventListener('load', function(){
	nav_toggle_h = sPage_intro.offsetHeight + sPage_intro.offsetTop;
	sHistory_content_ctner_h = sHistory_content_ctner.offsetTop;
	[].forEach.call(sCh_ctner, function(el){
		var this_ch_top = sHistory_content_ctner_h + el.offsetTop;
		sCh_ctner_top.push(this_ch_top);
		var this_children = el.querySelectorAll('.history_section_ctner');
		[].forEach.call(this_children, function(child){
			sHistory_section_ctner_top.push(this_ch_top + child.offsetTop);
		});
	});
	var last_h = sHistory_section_ctner_top[sHistory_section_ctner_top.length-1] + sHistory_section_ctner[sHistory_section_ctner.length-1].offsetHeight;
	sHistory_section_ctner_top.push(last_h);
	var last_h = sCh_ctner_top[sCh_ctner_top.length-1] + sCh_ctner[sCh_ctner.length-1].offsetHeight;
	sCh_ctner_top.push(last_h);
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

	if(sTop < nav_toggle_h - 30 ){
		if(nav_bg){
			nav_bg = false;
			sNav.classList.remove('bg');
		}
	}
	else if(sTop >= nav_toggle_h - 30 ){
		if(!nav_bg){
			nav_bg = true;
			sNav.classList.add('bg');
		}
	}

	if( sTop < sHistory_section_ctner_top[0] + sTop_dev_section){
		if(viewing_history_section != 0){
			viewing_history_section = 0;
			sHistory_section_ctner[0].classList.add('unviewed-section');
		}
	}
	else if(sTop >= sHistory_section_ctner_top[0] + sTop_dev_section && 
			sTop < sHistory_section_ctner_top[1] + sTop_dev_section){
		if(viewing_history_section != 1){
			viewing_history_section = 1;
			sHistory_section_ctner[1].classList.add('unviewed-section');
			sHistory_section_ctner[0].classList.remove('unviewed-section');
			
		}
	}
	else if(sTop >= sHistory_section_ctner_top[1] + sTop_dev_section && 
			sTop < sHistory_section_ctner_top[2] + sTop_dev_section){
		if(viewing_history_section != 2){
			viewing_history_section = 2;
			sHistory_section_ctner[0].classList.add('unviewed-section');
			sHistory_section_ctner[1].classList.remove('unviewed-section');
			sHistory_section_ctner[2].classList.add('unviewed-section');
		}
	}
	else if(sTop >= sHistory_section_ctner_top[2] + sTop_dev_section && 
			sTop < sHistory_section_ctner_top[3] + sTop_dev_section){
		if(viewing_history_section != 3){
			viewing_history_section = 3;
			sHistory_section_ctner[1].classList.add('unviewed-section');
			sHistory_section_ctner[2].classList.remove('unviewed-section');
			sHistory_section_ctner[3].classList.add('unviewed-section');
		}
	}
	else if(sTop >= sHistory_section_ctner_top[3] + sTop_dev_section && 
			sTop < sHistory_section_ctner_top[4] + sTop_dev_section){
		if(viewing_history_section != 4){
			viewing_history_section = 4;
			sHistory_section_ctner[2].classList.add('unviewed-section');
			sHistory_section_ctner[3].classList.remove('unviewed-section');

		}
	}
	else if(sTop >= sHistory_section_ctner_top[4]){
		if(viewing_history_section != 'end'){
			viewing_history_section = 'end';
			sHistory_section_ctner[3].classList.add('unviewed-section');
		}
	}

	if(sTop >= sCh_ctner_top[0] + sTop_dev && 
			sTop < sCh_ctner_top[1] + sTop_dev){
		if(viewing_section != 2){
			viewing_section = 2;
			sCh_ctner[1].classList.add('unviewed');
			sCh_ctner[0].classList.remove('unviewed');
			
		}
	}
	else if(sTop >= sCh_ctner_top[1] + sTop_dev && 
			sTop < sCh_ctner_top[2] + sTop_dev){
		if(viewing_section != 3){
			viewing_section = 3;
			sCh_ctner[0].classList.add('unviewed');
			sCh_ctner[1].classList.remove('unviewed');
		}
	}
}