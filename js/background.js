const img = ["0.jpg", "1.jpg", "2.jpg"];

const randomImg = img[Math.floor(Math.random() * img.length)];

const getImg = document.createElement("img");
getImg.src = `img/${randomImg}`;

document.body.appendChild(getImg);
