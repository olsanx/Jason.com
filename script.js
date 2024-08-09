const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
});


document.addEventListener('scroll', function() {
  const curtainContainer = document.querySelector('.curtain-container');
  const containerPosition = curtainContainer.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 0.7;

  if (containerPosition < screenPosition) {
      curtainContainer.classList.add('active');
  }
});
