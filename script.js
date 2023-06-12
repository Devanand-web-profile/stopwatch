var  hr=0;
var  min=0;
var  sec=0;
var  msec=0;

var timer= false;

function start(){
    timer = true;
    stopwatch();
}
function stop(){
    timer = false;
}
function reset(){
    timer = false;
     hr=0;
     min=0;
     sec=0;
     msec=0;

     document.getElementById("msec").innerHTML=msec;
     document.getElementById("sec").innerHTML=sec;
     document.getElementById("min").innerHTML=min;
     document.getElementById("hr").innerHTML=hr;
}

function stopwatch(){
    if(timer == true)
    {
        msec = msec+1;
        if(msec == 100){
            sec = sec+1;
            msec =00;
        }
        if(sec == 60){
            min=min+1;
            sec=0;
            msec=00;
        }
        if(min == 60){
            hr =hr+1;
            min=0;
            sec=0;
            msec=00;
        }
        document.getElementById("msec").innerHTML=msec;
        document.getElementById("sec").innerHTML=sec;
        document.getElementById("min").innerHTML=min;
        document.getElementById("hr").innerHTML=hr;
    }
    setTimeout("stopwatch()",10);

}