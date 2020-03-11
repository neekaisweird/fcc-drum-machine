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

function playAudio(e) {
  let key = e.keyCode;
  let foundKey = keys.find(k => k.code === key);
  if (!foundKey) {
    return;
  }
  let audio = document.getElementById(foundKey.letter);
  let drumPad = audio.parentElement;
  display.innerText = foundKey.sound;
  audio.currentTime = 0;
  audio.play();
  drumPad.classList.add('selected');
}

function removeClass(e) {
  e.target.classList.remove('selected');
}

drums.forEach(drum => drum.addEventListener('animationend', removeClass));
window.addEventListener('keydown', playAudio);
