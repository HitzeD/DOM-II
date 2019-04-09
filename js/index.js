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

btn[1].addEventListener('mouseover', (event) => {
    btn[1].style.fontSize = '3rem';
})

btn[1].addEventListener('mouseout', (event) => {
    btn[1].style.fontSize = '1rem';
})

midSec[0].addEventListener('dblclick', (event) => {
    midSec[0].style.fontFamily = 'cursive';
})

document.addEventListener('keydown', (event) => {
    page.style.backgroundColor = 'black';
    page.style.color = 'white';
});
window.addEventListener('resize', (event) => {
    alert(`You found another!`);
})



