var canvas = document.querySelector('canvas');
console.log(canvas); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

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

function Circle(x,y,dx,dy,r) {
	this.x = x;
	this.y = y;
	this.dx = dx,
	this.dy = dy,
	this.r=r,
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
		if(this.y<510)
		{
			this.draw();
			this.y+=this.dy;
		}
		else
		{
			this.y=90;
		}
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


for(let i=0;i<3;i++)
{

a.push(new Circle(400+(200*i),90+(150*i),0,2,40));

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

animate();
















