const hamburger = document.querySelector('.hamburger');
const navSection = document.querySelector('.navbar__items');

const btn1 = document.querySelector('.main--btn-one');
const btn2 = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay__modal');
const cardBtns = document.querySelectorAll('.card--btn');

const bookmark = document.querySelector('.main--btn-bookmark');

const pledgeBtns = document.querySelectorAll('.pledge-btn');
const closeBtn = document.querySelector('.close-btn-success');
const overlaySuccess = document.querySelector('.overlay__success');

const radioBtns = document.querySelectorAll('.radio-btn');
const openSection = document.querySelectorAll('.open--section');

hamburger.addEventListener('click', () => {
  navSection.style.display =
    navSection.style.display === 'none' ? 'block' : 'none';
});

for (let i = 0; i < cardBtns.length; i++) {
  cardBtns[i].addEventListener('click', () => {
    overlay.classList.toggle('overlay__inactive');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}

btn1.addEventListener('click', () => {
  overlay.classList.toggle('overlay__inactive');
});

btn2.addEventListener('click', () => {
  overlay.classList.toggle('overlay__inactive');
});

bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('main--btn-bookmarked');
});

for (let i = 0; i < pledgeBtns.length; i++) {
  pledgeBtns[i].addEventListener('click', () => {
    overlaySuccess.classList.toggle('overlay__inactive');
    overlay.classList.toggle('overlay__inactive');
  });
}

closeBtn.addEventListener('click', () => {
  overlaySuccess.classList.toggle('overlay__inactive');
});

for (let i = 0; i <= radioBtns.length - 1; i++) {
  radioBtns[i].addEventListener('click', () => {
    for (let j = 0; j < openSection.length; j++) {
      openSection[j].style.display = 'none';
    }
    if (!openSection[i]) return;
    openSection[i].style.display = 'none' ? 'grid' : '';
  });
}
