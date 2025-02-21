function enterLibrary() {
   // Plays click sound
   document.getElementById('click-sound').play();


   document.getElementById('popup').style.display = 'none';


   const journal = document.getElementById('journal');
   journal.style.display = 'block';
   document.getElementById('background-music').play();
}


function flipCard(card) {
   card.classList.toggle('flipped');
}


function setVolume(value) {
   document.getElementById('background-music').volume = value;
}


function toggleMute() {
   const backgroundMusic = document.getElementById('background-music');
   backgroundMusic.muted = !backgroundMusic.muted;
}
