/* window.onload=()=>{setTimeout(()=>{document.getElementsByClassName('title-grp')[0].style.display='block';document.getElementsByClassName('loader-wrapper')[0].style.display='none'},1000)}
document.querySelector('#toggle').addEventListener('click',()=>{const nav=document.querySelector('nav');const toggle=document.querySelector('#toggle');const navMenu=document.querySelector('#nav-menu');nav.classList.toggle('turnWhite');toggle.classList.toggle('open');navMenu.classList.toggle('slideIn')})
const mybutton=document.getElementsByClassName("backToTop")[0];window.onscroll=function(){scrollFunction()};function scrollFunction(){if(document.body.scrollTop>20||document.documentElement.scrollTop>20){mybutton.style.display="block"}else{mybutton.style.display="none"}}
function topFunction(){document.body.scrollTop=0;document.documentElement.scrollTop=0} */
window.onload = () => {
    setTimeout(() => {
        document.getElementsByClassName('title-grp')[0].style.display = 'block';
        document.getElementsByClassName('loader-wrapper')[0].style.display = 'none'
    }, 1000)
}
document.querySelector('#toggle').addEventListener('click', () => {
    const nav = document.querySelector('nav');
    const toggle = document.querySelector('#toggle');
    const navMenu = document.querySelector('#nav-menu');
    nav.classList.toggle('turnWhite');
    toggle.classList.toggle('open');
    navMenu.classList.toggle('slideIn')
})
const mybutton = document.getElementsByClassName("backToTop")[0];
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 800) {
        mybutton.style.display = "block";
        document.querySelectorAll('.slide-item').forEach(element => {
            element.classList.add('appear');
        })
    } else {
        mybutton.style.display = "none"
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}