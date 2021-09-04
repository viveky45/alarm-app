const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


const particlesArray=[];
//get mouse position
let mouse={
    x:null,
    y:null
}
window.addEventListener('mousemove',function(event){
mouse.x=event.x;
mouse.y=event.y;
})