
const comingSoonText = document.querySelector('.coming-soon-container h1');
const textToType = 'Coming Soon...';
let typingIndex = 0;

function typeText() {
  if (typingIndex < textToType.length) {
    comingSoonText.textContent += textToType[typingIndex];
    typingIndex++;
    setTimeout(typeText, 100); 
  }
}

typeText();