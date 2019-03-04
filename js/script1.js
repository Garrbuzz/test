window.onload = function () {
	var div = document.querySelector('.item');
	var timer = new Timer(60, div);
	alert();
	setInterval(t, 1000);
function t(){
		timer.tick();
	}
function Timer(time, elem){

	this.time = time;
	this.elem = elem;

	this.tick = function(){

		this.time--;
		this.elem.innerHTML = this.time;
	}

}



}	