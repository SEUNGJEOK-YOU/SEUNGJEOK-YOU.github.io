function getTime() {
  const time = document.querySelector("#clock span");

  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  time.innerText = `${hours}:${minutes}`;
}

getTime();
setInterval(getTime, 1000);
