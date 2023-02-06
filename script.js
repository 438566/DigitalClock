function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";

    if (hour > 12) {
        session = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = hour + ":" + minutes + ":" + seconds + " " + session;

    document.querySelector('.clock').innerText = time;
    let Lt = setTimeout(function() {
        currentTime();
    }, 1000)
}

currentTime();