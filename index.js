let timer;
let remainingSeconds;

// LocalStorage'dan kalan süreyi al
const saved = parseInt(localStorage.getItem("remainingSeconds"));
if (!isNaN(saved) && saved > 0) {
    remainingSeconds = saved;
} else {
    remainingSeconds = undefined;
}

document.getElementById("start").addEventListener("click", function () {
    if (remainingSeconds === undefined) {
        const minutesInput = parseInt(document.getElementById("minutes").value);
        if (!isNaN(minutesInput) && minutesInput > 0) {
            remainingSeconds = minutesInput * 60;
        } else {
            remainingSeconds = 0;
        }
    }

    clearInterval(timer);

    // Timer'ı başlat
    timer = setInterval(() => {
        // Önce display'i güncelle
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = remainingSeconds % 60;
        document.querySelector("h1").innerText = `${minutes}:${seconds.toString().padStart(2,'0')}`;

        // Süreyi azalt
        remainingSeconds--;

        // Süre bitti mi kontrolü
        if (remainingSeconds < 0) {
            clearInterval(timer);
            document.querySelector("h1").innerText = "Mola zamanı!";
            localStorage.removeItem("remainingSeconds");
        } else {
            localStorage.setItem("remainingSeconds", remainingSeconds);
        }
    }, 1000);
});

document.getElementById("stop").addEventListener("click", () => clearInterval(timer));
document.getElementById("reset").addEventListener("click", () => {
    clearInterval(timer);
    remainingSeconds = undefined;
    document.querySelector("h1").innerText = "00:00";
    localStorage.removeItem("remainingSeconds");
});