window.onload = function() {
	var a = document.getElementById('label');
	console.log(a);
	a.onclick = function(){
		drop = document.getElementById('nav-wrap');
		if(drop.style.overflow === "hidden") {
			drop.style.overflow = 'visible';
			a.style.background = '#fff';
			a.style.color = '#333';
			console.log('clicked');
		}
		else {
			drop.style.overflow = 'hidden';
			a.style.background = 'transparent';
			a.style.color = '#fff';
			console.log('unclicked');
		}
	}
	/*if(a.onmouseover){
		a.style.background = '#fff';
		a.style.color = '#333';
	}
	else {
		a.style.background = 'transparent';
		a.style.color = '#333'
	}*/
}