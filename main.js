canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d")

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=6;
ctx.arc(270,180,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=6;
ctx.arc(390,180,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=6;
ctx.arc(510,180,50,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();

ctx.strokeStyle="yellow";
ctx.lineWidth=6;
ctx.arc(320,230,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=6;
ctx.arc(440,230,50,0,2*Math.PI);
ctx.stroke();


