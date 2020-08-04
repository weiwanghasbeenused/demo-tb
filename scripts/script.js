var wW = window.innerWidth;
var wH = window.innerHeight;

var sProject_origins_ctner = document.getElementById('project_origins_ctner');
sProject_origins_ctner.classList.add('unviewed');



var sTop = window.scrollY;
var sTop_dev = - wH * 5 / 10;
var sProject_origins_ctner_top = sProject_origins_ctner.offsetTop;
var sHistory_section_ctner_top = [];
var sCh_ctner_top = [];
var sHistory_section_ctner = document.getElementsByClassName('history_section_ctner');
// [].forEach.call(sHistory_section_ctner, function(el){
// 	el.classList.add('unviewed');
// });
var sCh_ctner = document.getElementsByClassName('ch_ctner');
[].forEach.call(sCh_ctner, function(el){
	el.classList.add('unviewed');
});


var viewing_section = 0;

var ticking = false;

window.addEventListener('load', function(){
	sProject_origins_ctner_top = sProject_origins_ctner.offsetTop;
	[].forEach.call(sCh_ctner, function(el){
		var this_ch_top = el.offsetTop;
		var this_children = el.querySelectorAll('.history_section_ctner');
		[].forEach.call(this_children, function(child){
			sHistory_section_ctner_top.push(this_ch_top + child.offsetTop);
		});
	});
	var last_h = sHistory_section_ctner_top[sHistory_section_ctner_top.length-1] + sHistory_section_ctner[sHistory_section_ctner.length-1].offsetHeight;
	sHistory_section_ctner_top.push(last_h);
	[].forEach.call(sCh_ctner, function(el){
		sCh_ctner_top.push(el.offsetTop);
	});
	var last_h = sCh_ctner_top[sCh_ctner_top.length-1] + sCh_ctner[sCh_ctner.length-1].offsetHeight;
	sCh_ctner_top.push(last_h);
	console.log(sHistory_section_ctner_top);
});
window.addEventListener('scroll', onScroll, false);


function onScroll() {
	sTop = window.scrollY;
	requestTick();
}

function requestTick() {
	if(!ticking) {
		requestAnimationFrame(function(){
			// if(sTop < sProject_origins_ctner_top + sTop_dev){
			// 	if(viewing_section != 0){
			// 		viewing_section = 0;

			// 		sProject_origins_ctner.classList.add('unviewed');
			// 	}
			// }
			// else if(sTop >= sProject_origins_ctner_top + sTop_dev && 
			// 		sTop < sHistory_section_ctner_top[0] + sTop_dev){
			// 	if(viewing_section != 1){
			// 		viewing_section = 1;
			// 		console.log('passed '+sProject_origins_ctner_top);
			// 		sProject_origins_ctner.classList.remove('unviewed');
			// 		sHistory_section_ctner[0].classList.add('unviewed');
					
			// 	}
			// }
			// else if(sTop >= sHistory_section_ctner_top[0] + sTop_dev && 
			// 		sTop < sHistory_section_ctner_top[1] + sTop_dev){
			// 	if(viewing_section != 2){
			// 		viewing_section = 2;
			// 		console.log('passed '+sHistory_section_ctner_top[0]);
			// 		sProject_origins_ctner.classList.add('unviewed');
			// 		sHistory_section_ctner[1].classList.add('unviewed');
			// 		sHistory_section_ctner[0].classList.remove('unviewed');
					
			// 	}
			// }
			// else if(sTop >= sHistory_section_ctner_top[1] + sTop_dev && 
			// 		sTop < sHistory_section_ctner_top[2] + sTop_dev){
			// 	if(viewing_section != 3){
			// 		viewing_section = 3;
			// 		sHistory_section_ctner[0].classList.add('unviewed');
			// 		sHistory_section_ctner[1].classList.remove('unviewed');
			// 		sHistory_section_ctner[2].classList.add('unviewed');
			// 	}
			// }
			// else if(sTop >= sHistory_section_ctner_top[2] + sTop_dev && 
			// 		sTop < sHistory_section_ctner_top[3] + sTop_dev){
			// 	if(viewing_section != 4){
			// 		viewing_section = 4;
			// 		sHistory_section_ctner[1].classList.add('unviewed');
			// 		sHistory_section_ctner[2].classList.remove('unviewed');
			// 		sHistory_section_ctner[3].classList.add('unviewed');
			// 		console.log(sHistory_section_ctner[2].innerText);
			// 	}
			// }
			// else if(sTop >= sHistory_section_ctner_top[3] + sTop_dev && 
			// 		sTop < sHistory_section_ctner_top[4] + sTop_dev){
			// 	if(viewing_section != 5){
			// 		viewing_section = 5;
			// 		sHistory_section_ctner[2].classList.add('unviewed');
			// 		sHistory_section_ctner[3].classList.remove('unviewed');
			// 		console.log(sHistory_section_ctner[2].innerText);

			// 	}
			// }
			// else if(sTop >= sHistory_section_ctner_top[4]){
			// 	if(viewing_section != 'end'){
			// 		viewing_section = 'end';
			// 		sHistory_section_ctner[3].classList.add('unviewed');
			// 	}
			// }
			if(sTop < sProject_origins_ctner_top + sTop_dev){
				if(viewing_section != 0){
					viewing_section = 0;

					sProject_origins_ctner.classList.add('unviewed');
				}
			}
			else if(sTop >= sProject_origins_ctner_top + sTop_dev && 
					sTop < sCh_ctner_top[0] + sTop_dev){
				if(viewing_section != 1){
					viewing_section = 1;
					sProject_origins_ctner.classList.remove('unviewed');
					sCh_ctner[0].classList.add('unviewed');
					
				}
			}
			else if(sTop >= sCh_ctner_top[0] + sTop_dev && 
					sTop < sCh_ctner_top[1] + sTop_dev){
				if(viewing_section != 2){
					viewing_section = 2;
					sProject_origins_ctner.classList.add('unviewed');
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
			
			ticking = false;
		});
	}
	ticking = true;
}