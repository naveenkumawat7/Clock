setInterval(showTime,100);

function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    var am_pm="AM"
    if(hour >= 12){
        if(hour>12){
            hour=hour-12;
            am_pm = "PM";
        }
        else{
            hour =0;
            am_pm = "AM";     
        }
        hour = hour <10?"0"+hour :hour;
        min = min <10?"0"+min :min;
        sec = sec <10?"0"+sec :sec;
        
    }
        let currentTime = hour + ":" + min +":"+sec+" "+ am_pm;
        document.getElementById("clock").innerHTML = currentTime;
        // document.write(currentTime)
}