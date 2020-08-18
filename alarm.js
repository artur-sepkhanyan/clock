function showTime(hour,min,sec){
        var date = new Date();
        var h = date.getHours(); 
        var m = date.getMinutes(); 
        var s = date.getSeconds(); 
        var time = h + ":" + m + ":" + s;
    if(hour == undefined && min == undefined && sec == undefined){
        
    
        document.getElementById("MyClockDisplay").innerText = time;
    
        setTimeout(showTime, 1000);
     
    }else{
        
        h = hour;
        m = min;
        s = sec ;
        time = h + ":" + m + ":" + s;
        document.getElementById("MyClockDisplay").innerText = time;
    
        setTimeout(showTime, 1000);
        
    }
    
 
}
showTime();
function changeTime(){
    var inp = document.getElementById("time").value; 
    var a = inp.split(":");
    
    showTime(a[0],a[1],a[2])
    
    
}
//  changeTime()