/*************************
  Initial Key Press Logic
**************************/

function playSound(e) {

  //query for audio tag with data-key that matches the pressed keys code
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  //query for tag of class "key" with data-key that matches the pressed keys code
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; //stops function for non-matching key-presses
  audio.currentTime = 0; //rewinds sounds for rapid key presses
  audio.play();

  //add the "playing" to the matching key to add css styles for selected button
  key.classList.add('playing');
}

// create a listener for keydowns that calls playSound() whenever
// a key is pressed. 
window.addEventListener("keydown", playSound);


/******************************
  Removal of 'playing' Class
******************************/

function removeTransition(e) {

  //filters only tranform events
  if (e.propertyName !== 'transform') return;

  this.classList.remove('playing');
}

//returns a node list of all the html elemements of class type 'key'
const keys = document.querySelectorAll('.key');

//add event listender to every html element of class type 'key'
//if the heard even is a 'transitionend' call our func removeTransition()
keys.forEach( key => key.addEventListener('transitionend', removeTransition));