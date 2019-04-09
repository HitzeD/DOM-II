const btn = document.querySelectorAll('.btn');
const intro = document.querySelector('.intro');
const midSec = document.querySelectorAll('.content-section');
const page = document.querySelector('html');



window.addEventListener('load', (event) => {
    alert('There are 9 hidden Event Listeners on this page. Can you find them all?');
});

intro.addEventListener('click', (event) => {
    intro.style.textAlign = 'center';
})

btn[0].addEventListener('click', (event) => {
    btn[0].style.backgroundColor = 'black';
})

btn[1].addEventListener('load', (event) => {
    btn[1].style.textSize = '3rem';
})

midSec[0].addEventListener('')



console.log(page);

