var canvas = document.querySelector('canvas');
var highscore=0;
console.log(canvas); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
 
var z=0;
var Score = "Score = "+z+ "<br>";
document.getElementById("demo").innerHTML = Score;

//creating animations

c.fillStyle= "black";
c.fillRect(300,50,600,500); 

c.beginPath();
c.moveTo(500,50);
c.lineTo(500,550);
c.strokeStyle = 'white';
c.stroke();

c.beginPath();
c.moveTo(700,50);
c.lineTo(700,550);
c.strokeStyle = 'white';
c.stroke();


 
function Circle(x,y,dx,dy,r,a) {
	this.x = x;
	this.y = y;
	this.dx = dx,
	this.dy = dy,
	this.r=r,
	this.a=a,
	this.draw =function() {
		c.beginPath();
		c.arc(this.x,this.y,this.r,0,Math.PI * 2,true);
		c.fillStyle = 'white';
		c.fill();
	}
	this.del =function(y) {
		c.beginPath();
		c.arc(this.x,y,this.r,0,Math.PI * 2,true);
		c.fillStyle = 'white';
		c.fill();
	}
	this.update = function() {
		this.dy+=this.a;
		if(this.y<510)
		{
			this.draw();
			this.y+=this.dy;
		}
		else
		{
			this.y=90;
			z++;
		}
		Score = "Score = "+z+ "<br> ";
		document.getElementById("demo").innerHTML = Score;
	}
}

function goleft(){
	if(d.x!=380)
	d.x-=200;
}
function goright(){
	if(d.x!=780)
	d.x+=200;
}

function stop()
{
	for(var j=0;j<a.length;j++)
	{
		a[j].dy=0;
		a[j].a=0;
	}
	
}

function checkdist(a,b)
{
	if(b.y-a.y<=40&&a.x-b.x==20)
	return 0;
	else
	return 1;
}

function Car(x,y,w,h,dx){
	this.x=x;
	this.w=w;
	this.y=y;
	this.h=h;
	this.dx=dx;
	this.draw =function() {	
		c.fillStyle= "red";
		c.fillRect(this.x,this.y,this.w,this.h);
	}
	this.update = function() {
			
			this.draw();
		
	}
}


var a= [];
var d = new Car(580,500,40,40,3);
var addEvent = document.addEventListener ? function(target,type,action){
    if(target){
        target.addEventListener(type,action,false);
    }
} : function(target,type,action){
    if(target){
        target.attachEvent('on' + type,action,false);
    }
}

addEvent(document,'keydown',function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===37){
        goleft();
    }
    if(key===39){
        goright();
    }
});


//mobile touch start
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            goleft();
        } else {
            goright();
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};


//mobile touch end




for(let i=0;i<3;i++)
{

a.push(new Circle(400+(200*i),90+(150*i),0,2,40,0.004));

}



function animate(){
requestAnimationFrame(animate);
c.clearRect(0,0,innerWidth,innerHeight);
c.fillStyle= "black";
c.fillRect(300,50,600,500); 
c.beginPath();
c.moveTo(500,50);
c.lineTo(500,550);
c.strokeStyle = 'white';
c.stroke();
c.beginPath();
c.moveTo(700,50);
c.lineTo(700,550);
c.strokeStyle = 'white';
c.stroke();



for(var j=0;j<a.length;j++)
{
	
		a[j].update();
}

d.update();
for(var j=0;j<a.length;j++)
{
	if(checkdist(a[j],d)==0)
	{
		stop();
	}
}

}

function start(){
animate();
}

















