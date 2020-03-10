/* import {pageLoad} from './events.js'; */

window.onload = () => {
    setTimeout(() => {
        document.getElementsByClassName('title-grp')[0].style.display = 'block';
        document.getElementsByClassName('loader-wrapper')[0].style.display = 'none';
    },1000)
}

document.querySelector('#toggle').addEventListener('click', () => {
    const nav = document.querySelector('nav');
    const toggle = document.querySelector('#toggle');
    const navMenu = document.querySelector('#nav-menu');
    nav.classList.toggle('turnWhite');
    toggle.classList.toggle('open');
    navMenu.classList.toggle('slideIn');
})


const mybutton = document.getElementsByClassName("backToTop")[0];

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

/*  const slider = document.querySelector('.slider');
 const slideItem = document.querySelectorAll('.slide-item');

 const prevBtn = document.querySelector('#left');
 const nextBtn = document.querySelector('#next');

 const counter = 1;
 const size = slideItem[0].clientWidth;
console.log(size)
 slider.style.transform = `translate(${-size * counter}px)`;

 */