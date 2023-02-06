let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

const date = new Date();

hours.innerHTML = date.getHours();
minutes.innerHTML = ':' + date.getMinutes();
seconds.innerHTML = ':' + date.getSeconds();
