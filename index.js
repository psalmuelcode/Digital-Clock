"use strict";

let hourEl = document.querySelector(".hour");
let minEl = document.querySelector(".minutes");
let secsEl = document.querySelector(".seconds");
let ampmEl = document.querySelector(".ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  hourEl.innerText = h;
  minEl.innerText = m;
  secsEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
