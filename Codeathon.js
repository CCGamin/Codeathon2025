function enterLibrary() {
    // Play click sound
    document.getElementById('click-sound').play();
 
 
    // Hide popup
    document.getElementById('popup').style.display = 'none';
 
 
    // Show journal and play background music
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