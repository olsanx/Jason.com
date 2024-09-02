               /*HAMBURGER NAV*/

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = navMenu.querySelectorAll('a');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  document.body.classList.toggle('nav-menu-open');
  hamburger.classList.toggle('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    document.body.classList.remove('nav-menu-open');
    hamburger.classList.remove('open');
  });
});

              /*IMAGE-CURTAIN*/

document.addEventListener('scroll', function() {
  const curtainContainer = document.querySelector('.curtain-container');
  const containerPosition = curtainContainer.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 0.7;

  if (containerPosition < screenPosition) {
      curtainContainer.classList.add('active');
  }
});


const container = document.querySelector('.infinite-scroll-container');
const content = document.querySelector('.infinite-scroll-content');

let scrollPosition = 0;
let scrollSpeed = 1; // Adjust the scroll speed to your liking

// Clone the content to create an infinite loop
const clonedContent = content.cloneNode(true);
clonedContent.style.marginLeft = `${content.offsetWidth}px`;
container.appendChild(clonedContent);

function animateScroll() {
  scrollPosition -= scrollSpeed;
  content.style.transform = `translateX(${scrollPosition}px)`;
  clonedContent.style.transform = `translateX(${scrollPosition}px)`;

  if (scrollPosition < -content.offsetWidth) {
    scrollPosition = 0;
  }

  requestAnimationFrame(animateScroll);
}

animateScroll();


const cvButton = document.getElementById('cv-button');
const button2 = document.getElementById('more-button');

cvButton.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://drive.google.com/uc?export=download&id=1h2QeuWLlSVPBYezUdbn2fjHBqz33T5tn', true);
  xhr.responseType = 'blob';
  xhr.onload = function() {
    if (xhr.status === 200) {
      const blob = new Blob([xhr.response], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'JasonsPortfolio.pdf';
      link.click();
    }
  };
  xhr.send();
});

button2.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href ='https://drive.google.com/uc?export=download&id=1h2QeuWLlSVPBYezUdbn2fjHBqz33T5tn';
  link.download = 'JasonsPortfolio.pdf';
  link.click();
})



