const screens = document.querySelectorAll(".screen");
const chooseFruitButtons = document.querySelectorAll(".choose-fruit-btn");
const startButton = document.getElementById("start-btn");
const gameContainer = document.getElementById("game-container");
const timeElement = document.getElementById("time");
const scoreElement = document.getElementById("score");
const message = document.getElementById("message");
let seconds = 0;
let score = 0;
let selectedfruit = {};

startButton.addEventListener("click", () => screens[0].classList.add("up"));

const increaseScore = () => {
  score++;
  if (score > 19) message.classList.add("visible");
  scoreElement.innerHTML = `Score: ${score}`;
};

const addFruits = () => {
  setTimeout(createFruits, 1000);
  setTimeout(createFruits, 1500);
};

const Fruitfruit = function () {
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove, 2000);
  addFruits();
};

const getRandomLocation = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
};

const createFruits = () => {
  const fruit = document.createElement("div");
  fruit.classList.add("fruit");
  const { x, y } = getRandomLocation();
  fruit.style.top = `${y}px`;
  fruit.style.left = `${x}px`;
  fruit.innerHTML = `<img src="${selectedfruit.src}" 
  alt="${selectedfruit.alt}" 
  style="transform: rotate(${Math.random() * 360}deg)" />`;
  fruit.addEventListener("click", Fruitfruit);
  gameContainer.appendChild(fruit);
};

const increaseTime = () => {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeElement.innerHTML = `Time: ${m}:${s}`;
  seconds++;
};

const startGame = () => setInterval(increaseTime, 1000);

chooseFruitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");
    const src = image.getAttribute("src");
    const alt = image.getAttribute("alt");
    selectedfruit = { src, alt };
    screens[1].classList.add("up");
    setTimeout(createFruits, 1000);
    startGame();
  });
});

function cngbg()
{
    document.body.style.backgroundImage = "url('images/forest.gif')";
   
}