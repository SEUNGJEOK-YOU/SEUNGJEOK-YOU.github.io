const imgs = ["0.jpg",
"1.jpg",
"2.jpg",
"3.jpg",
"4.jpg",
"5.jpg",
"6.jpg",
"7.jpg",
"8.jpg",
"9.jpg",
"10.jpg",
"11.jpg"];

const bgimg = document.querySelector("#bgimg")

const randomImgIdx = Math.floor(Math.random() * imgs.length);
const imgsrc = imgs[randomImgIdx];
bgimg.src = `img/${imgsrc}`;