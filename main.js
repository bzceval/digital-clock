const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  //ilk önce PC saati alıyor. Aldığı saati bi değişkene atıyor
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  //digital saat yaptığımzıdan 0 ekler
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;


  //Atanan değişkenler html üzerine ekleniyor.
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl, (innerText = ampm);

  //counter dönüyor
  setTimeout(() => {
    updateClock();
  }, 1000);
}
updateClock();
