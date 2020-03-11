let display = document.getElementById('display');
let drums = [...document.getElementsByClassName('drum-pad')];
const keys = [
  { code: 81, letter: 'Q', sound: 'Snare' },
  { code: 87, letter: 'W', sound: 'Clap' },
  { code: 69, letter: 'E', sound: 'Bongo' },
  { code: 65, letter: 'A', sound: 'Wave' },
  { code: 83, letter: 'S', sound: 'Kick' },
  { code: 68, letter: 'D', sound: 'Cymbal' },
  { code: 90, letter: 'Z', sound: 'Timbales' },
  { code: 88, letter: 'X', sound: 'Bell' },
  { code: 67, letter: 'C', sound: 'Tabla' }
];

function playAudio(drumPad, audio, foundKey) {
  display.innerText = foundKey.sound;
  audio.currentTime = 0;
  audio.play();
  drumPad.classList.add('selected');
}

function findKey(e) {
  let key = e.keyCode;
  let foundKey = keys.find(k => k.code === key);
  if (!foundKey) {
    return;
  }
  let audio = document.getElementById(foundKey.letter);
  let drumPad = audio.parentElement;
  playAudio(drumPad, audio, foundKey);
}

function findTarget(e) {
  if (e.target.classList.contains('drum-pad')) {
    let drumPad = e.target;
    let audio = drumPad.children[1];
    let foundKey = keys.find(k => k.letter === drumPad.children[0].innerText);
    playAudio(drumPad, audio, foundKey);
  } else {
    let foundKey = keys.find(k => k.letter === e.target.innerText);
    let drumPad = e.target.parentElement;
    let audio = drumPad.children[1];
    playAudio(drumPad, audio, foundKey);
  }
}

function removeClass(e) {
  e.target.classList.remove('selected');
}

drums.forEach(drum => drum.addEventListener('animationend', removeClass));
drums.forEach(drum => drum.addEventListener('click', findTarget));
window.addEventListener('keydown', findKey);
