window.onload = function () {
  
    var seconds = 0, 
     milliseconds = 0, 
     msec = document.getElementById("msec"),
     sec = document.getElementById("sec"),
     startBtn = document.getElementById('startBtn'),
     stopBtn = document.getElementById('stopBtn'),
     resetBtn = document.getElementById('resetBtn'),
     Interval ;
  
    startBtn.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
    stopBtn.onclick = function() {
         clearInterval(Interval);
    }
    
  
    resetBtn.onclick = function() {
       clearInterval(Interval);
       milliseconds = "00";
        seconds = "00";
        msec.innerHTML = milliseconds;
        sec.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
        milliseconds++; 
      
      if(milliseconds <= 9){
        msec.innerHTML = "0" + milliseconds;

      } if (milliseconds > 9){
        msec.innerHTML = milliseconds;
        
      } if (milliseconds > 99) {
        console.log("seconds");
        seconds++;
        sec.innerHTML = "0" + seconds;
        milliseconds = 0;
        msec.innerHTML = "0" + 0;
      } if(seconds > 9){
        sec.innerHTML = seconds;
      }
    
    }
    
  
  }