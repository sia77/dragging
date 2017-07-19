
var handle = document.getElementById("handle_1");
var getCurrentElePos = function(el){
	return {top: el.getBoundingClientRect().top, left: el.getBoundingClientRect().left };
}
var x_offset = getCurrentElePos(handle).left;
console.log('x_offset', x_offset);

handle.addEventListener("mousedown", function(e){ 

	document.addEventListener("mousemove", myfunc );

});


var myfunc = function(e){

	var handle = document.getElementById("handle_1");
	console.log('x_offset: ', x_offset);

	handle.style.left = (e.clientX-x_offset) +"px";

	console.log('e: ', e.type);

}

document.addEventListener("mouseup", function(e){ 

	document.removeEventListener('mousemove', myfunc);
});

window.addEventListener('resize', function(e){
	console.log('resize');
	x_offset = getCurrentElePos(handle).left;
	console.log('x_offset', x_offset);
});

