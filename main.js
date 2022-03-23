// variable declaration

const refreshBtn = document.getElementById('btn');
const boxesWrapper = document.getElementById('wrapper');

let randomColorBlocks = null;
const countOfBoxes = 20;

// create colorBox

const createBoxes = () => {
  for (let i = 1; i <= countOfBoxes; i++) {
    const box = document.createElement('div');
    box.classList.add('generator__box');
    boxesWrapper.appendChild(box);

    randomColorBlocks = document.querySelectorAll('.generator__box');
  }
};

// create HexCode

const randomHexCode = () => {
  let chars = '0123456789abcdef';
  let colorLength = 6;
  let color = '#';

  for (let i = 0; i < colorLength; i++) {
    let randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor + 1);
  }

  return color;
};

// add color for boxes

const addColor = () => {
  randomColorBlocks.forEach((item) => {
    let newColor = randomHexCode();
    item.style.backgroundColor = newColor;
    item.innerHTML = newColor;
  });
};

// add listeners

refreshBtn.addEventListener('click', addColor);

window.addEventListener('load', () => {
  createBoxes();
  addColor();
});
