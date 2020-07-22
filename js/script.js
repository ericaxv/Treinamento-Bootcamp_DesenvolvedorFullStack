window.addEventListener('load', () => {
  elements();
  handleAreaColor();
});

let rangeRed = null;
let rangeGreen = null;
let rangeBlue = null;

let textRed = null;
let textGreen = null;
let textBlue = null;

let areaColor = null;

let r = '0';
let g = '0';
let b = '0';

function elements() {
  rangeRed = document.querySelector('#rangeRed');
  rangeGreen = document.querySelector('#rangeGreen');
  rangeBlue = document.querySelector('#rangeBlue');

  textRed = document.querySelector('#textRed');
  textGreen = document.querySelector('#textGreen');
  textBlue = document.querySelector('#textBlue');

  areaColor = document.querySelector('#areaColor');

  rangeRed = addEventListener('change', handleElements);
  rangeGreen = addEventListener('change', handleElements);
  rangeBlue = addEventListener('change', handleElements);
}

function handleElements(event) {
  range = event.target.value;
  id = event.target.id;

  if (id === 'rangeRed') {
    r = range;
  } else if (id === 'rangeGreen') {
    g = range;
  } else if (id === 'rangeBlue') {
    b = range;
  }

  handleAreaColor();
}

function handleAreaColor() {
  areaColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  textRed.value = r;
  textGreen.value = g;
  textBlue.value = b;
}
