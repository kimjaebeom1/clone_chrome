const images = ["0.jpeg", "1.jpeg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.className = "bgImage";

document.body.appendChild(bgImage); // body에 html을 추가
