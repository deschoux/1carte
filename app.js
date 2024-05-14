// ANIMATION MOVEMENT LAYERS
const container = document.querySelector(".container");
const card = document.querySelector(".card");

// ITEMS
const title = document.querySelector(".title");
const sneaker = document.querySelector(".imgBox img");
const purchase = document.querySelector(".purchase button");
const sizes = document.querySelectorAll(".sizes button");
const description = document.querySelector(".infoBox h3");

// MOVING ANIMATION EVENT
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20; // Réduire la sensibilité
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20; // Réduire la sensibilité
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

  // Synchroniser le mouvement du title et de la sneaker avec la carte
  title.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(150px)`;
  sneaker.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(200px)`;
});

// ANIMATE IN
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  title.style.transition = "none";
  sneaker.style.transition = "none";
  // POPOUT
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px)";
});

// ANIMATE OUT
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  title.style.transition = "all 0.5s ease";
  sneaker.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  // Reset du title et de la sneaker
  title.style.transform = "translateZ(0px) rotateY(0deg) rotateX(0deg)";
  sneaker.style.transform = "translateZ(0px) rotateY(0deg) rotateX(0deg)";
});

// Moving logo
const logo = document.getElementById("moving-logo");
let speed = 5; // Vitesse par défaut en secondes

function getRandomPosition() {
  const x = Math.random() * (window.innerWidth - logo.clientWidth);
  const y = Math.random() * (window.innerHeight - logo.clientHeight);
  return { x, y };
}

function moveLogo() {
  const { x, y } = getRandomPosition();
  logo.style.transition = `transform ${speed}s linear`;
  logo.style.transform = `translate(${x}px, ${y}px)`;
}

function startMovingLogo() {
  moveLogo();
  setInterval(moveLogo, speed * 1000);
}

document.body.addEventListener("keydown", function (event) {
  if (event.key === "+") {
    speed = Math.max(1, speed - 1); // Réduire la durée pour augmenter la vitesse
    clearInterval(interval);
    startMovingLogo();
  } else if (event.key === "-") {
    speed += 1; // Augmenter la durée pour réduire la vitesse
    clearInterval(interval);
    startMovingLogo();
  }
});

startMovingLogo();
