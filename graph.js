var canvas = document.getElementById('Egraph');
var ctx = canvas.getContext('2d');

function paintGraph(FullE, Time){
	y = FullE;
    x = Time;
	ctx.fillRect(50*x,100*y*10**22, 2,2);
}