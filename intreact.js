
const daysE1=document.getElementById('days');
const hoursE1=document.getElementById('hours');
const minutesE1=document.getElementById('minutes');
const secondsE1=document.getElementById('seconds');

const birthday="1 August 2023";
function birthdayCounter(){
    const currentDate = new Date();
    const birthdayDate = new Date(birthday);

    const totalseconds = (birthdayDate - currentDate)/1000;

    const days=Math.floor(totalseconds/3600/60);
    const hours=Math.floor(totalseconds/60)%24;
    const minutes=Math.floor(totalseconds/60)%60;
    const seconds=Math.floor(totalseconds)%60;

    daysE1.innerHTML=days;
    hoursE1.innerHTML=addzero(hours);
    minutesE1.innerHTML=addzero(minutes);
    secondsE1.innerHTML=addzero(seconds);
    
}
    function addzero(time){
        return time < 10 ? `0${time}` : time ;
    }

birthdayCounter();
setInterval(birthdayCounter ,1000);