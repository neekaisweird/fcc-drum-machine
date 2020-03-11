const keys = [
  { code: 81, letter: 'Q' },
  { code: 87, letter: 'W' },
  { code: 69, letter: 'E' },
  { code: 65, letter: 'A' },
  { code: 83, letter: 'S' },
  { code: 68, letter: 'D' },
  { code: 90, letter: 'Z' },
  { code: 88, letter: 'X' },
  { code: 67, letter: 'C' }
];

function playAudio(e) {
  let key = e.keyCode;
  let foundKey = keys.find(k => k.code === key);
  if (!foundKey) {
    return;
  }
  let audio = document.getElementById(foundKey.letter);
  let drumPad = audio.parentElement;
  //play audio and add class to parent
  drumPad.classList.add('selected');
  audio.play();
}

window.addEventListener('keydown', playAudio);
