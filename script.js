let hours = 00;
let minutes = 00;
let seconds = 00;
let tens = 00;
let start = document.querySelector('.start');
let stop = document.querySelector('.stop')
let begin = start;
let myVar;

stop.addEventListener('click', function() {
  start.disabled = false;
    clearInterval(myVar);

    return myVar;
  })

start.addEventListener('click', function() {
    myVar = setInterval(startTimer, 10);
    return myVar;
 })

function resetTimer() {
  clearInterval(myVar);
  start.disabled = false;
  tens = 00;
  seconds = 00;
  minutes = 00;
  hours = 00;
  document.querySelector('.tens').textContent = "0" + tens;
  document.querySelector('.seconds').textContent = "0" + seconds + ":";
  document.querySelector('.minutes').textContent = "0" + minutes + ":";
  document.querySelector('.hours').textContent = "0" + hours + ":";
}
document.querySelector('.reset').addEventListener('click', function() {
   resetTimer();
})

function startTimer() {
    tens++;
    if(tens <= 9) {
        document.querySelector('.tens').textContent = `0` + tens;
        
      } else if(tens > 9) {
        document.querySelector('.tens').textContent = `${tens}`
         if(tens > 99) {
            seconds++;
            document.querySelector('.tens').textContent = `${tens = 00}`;
          }
          else if(seconds <= 9) {
            document.querySelector('.seconds').textContent = "0" + seconds + ":";
          } else if(seconds > 9) {
             document.querySelector('.seconds').textContent = seconds + ":";
             if(seconds > 59) {
                 minutes++;
                 document.querySelector('.seconds').textContent = `${seconds = 00}`;
                 document.querySelector('.minutes').textContent = "0" + minutes + ":";
             } else if(minutes <= 9) {
                document.querySelector('.minutes').textContent = "0" + minutes + ":";
             }
          } else if(minutes > 9) {
               document.querySelector('.minutes').textContent = minutes + ":";
               if(minutes > 59) {
                  hours++;
                  document.querySelector('.minutes').textContent = `${minutes = 00}`;
                  document.querySelector('.hours').textContent = "0" + hours + ":";
               }
          } else if(hours < 9) {
                document.querySelector('.hours').textContent = "0" + hours + ":";
          } else if(hours > 9) {
            document.querySelector('.hours').textContent = hours + ":"; 
          }
      }
      start.disabled = true;
    }

