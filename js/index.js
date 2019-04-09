const btn = document.querySelectorAll('.btn');
const intro = document.querySelector('.intro');
const midSec = document.querySelectorAll('.content-section');
const page = document.querySelector('html');
const para = document.querySelectorAll('.content-section .text-content');
const aTags = document.querySelectorAll('.nav a');
const nav = document.querySelector('.nav-container');

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
    midSec[0].style.backgroundColor = 'green';
})

// Event propagation                          -----------------------
para[0].addEventListener('dblclick', (event) => {
    event.stopPropagation();
    midSec[0].style.fontFamily = 'cursive';
})

document.addEventListener('keydown', (event) => {
    page.style.backgroundColor = 'black';
    page.style.color = 'white';
});

window.addEventListener('resize', (event) => {
    alert(`You found another!`);
})

window.addEventListener('scroll', (event) => {
    page.style.backgroundColor = 'yellow';
})
// Propagation                            -------------------
for(let i = 0; i < aTags.length; i++){
    aTags[i].addEventListener('click', (event) => {
        event.stopPropagation();
        aTags[i].style.backgroundColor = 'blue';
        aTags[i].style.borderRadius = '10px';
        event.preventDefault();
    });
};

nav.addEventListener('click', (event) => {
    nav.style.backgroundColor = 'purple';
});