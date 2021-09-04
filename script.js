let showtime=document.querySelector('.showtime');

function updatetime(){
    let currentdate=new Date();
    let hours=currentdate.getHours();
    let minutes=currentdate.getMinutes();
    let second=currentdate.getSeconds();
   

    
   second=second<10?"0"+second:second;
   minutes=minutes<10?"0"+minutes:minutes;
   hours=hours<12?hours:hours-12;
   hours=hours<10?"0"+hours:hours;
    let timestr=hours+":"+minutes+":"+second+":"+(hours<12?"AM":"PM");


    showtime.innerHTML=timestr;
}
setInterval(() => {
    updatetime();
}, 1000);

ring=()=>{

    let currentdate=new Date();
    let hours=currentdate.getHours();
    let minutes=currentdate.getMinutes();
    let second=currentdate.getSeconds();
    let inhours=document.getElementById('inhours');
    let inminutes=document.getElementById('inminutes');
    let insecond=document.getElementById('insecond');
    let am=document.getElementById('AM');

    if(am.value=="AM")
    {
    let interval=(inhours.value-hours)*60*60+(inminutes.value-minutes)*60+(insecond.value-second);
    alert(`Your Alarm will ring after ${inhours.value-hours}:${inminutes.value-minutes}:${insecond.value-second}`)
    }
    else
    {
        
    let interval=12*60*60+(inhours.value-hours)*60*60+(inminutes.value-minutes)*60+(insecond.value-second);
    alert(`Your Alarm will ring after ${inhours.value-hours+12}:${inminutes.value-minutes}:${insecond.value-second}`);

    }
    setTimeout(() => {
        
    var audio=new Audio('mixkit-digital-clock-digital-alarm-buzzer-992.wav');
    audio.play();
    
    }, interval*1000);


}
document.getElementById('btn').addEventListener('click',()=>{

    
    let currentdate=new Date();
    let hours=currentdate.getHours();
    let minutes=currentdate.getMinutes();
    let second=currentdate.getSeconds();
    let inhours=document.getElementById('inhours');
    let inminutes=document.getElementById('inminutes');
    let insecond=document.getElementById('insecond');

    if(inminutes.value=="" || inhours.value=="" || insecond.value=="")
    {
        alert('Enter the time for alarm to set');
    }
else{

     ring();
    
}
})