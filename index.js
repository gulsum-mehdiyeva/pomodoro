
let timer;
let remainingSeconds;
document.getElementById("start").addEventListener("click", function(){
    if(remainingSeconds===undefined||remainingSeconds===0){
    const minutesInput = document.getElementById("minutes").value;
    remainingSeconds = parseInt(minutesInput) * 60;
    clearInterval(timer);}
    else if(remainingSeconds>0){
        clearInterval(timer);
    }
 timer = setInterval(() => {
    if(remainingSeconds <= 0){
        clearInterval(timer);
        setTimeout(() => {document.querySelector("h1").innerText = "Mola zamanı!";}, 1000);
        return;
    } else {
        remainingSeconds--;
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = remainingSeconds % 60;
        document.querySelector("h1").innerText = `${minutes}:${seconds.toString().padStart(2,'0')}`;
    }
}, 1000);
});

document.getElementById("stop").addEventListener("click", function(){
    clearInterval(timer);
});
document.getElementById("reset").addEventListener("click", function(){
    clearInterval(timer);
    document.querySelector("h1").innerText = "00:00";
});
localStorage.setItem("remainingSeconds", remainingSeconds);
const saved = Math.floor(parseInt(localStorage.getItem("remainingSeconds")));
if(saved){
    remainingSeconds = saved;
    }
    else{
        remainingSeconds = 0;
    }



