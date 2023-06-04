const toggleBtn = document.querySelector('.menu_toggle');
const menu = document.querySelector('.menu_bar_content');
const icons = document.querySelector('.menu_bar_icons');
const x1 = document.querySelector('#use');
const x2 = document.querySelector('#Variables');
const x3 = document.querySelector('#Parameters');
const x4 = document.querySelector('#Basic');
const x5 = document.querySelector('#Loop');
const x6 = document.querySelector('#IF');
const x7 = document.querySelector('#User');
const x8 = document.querySelector('#Bool');
const content1 = document.querySelector('.overall_usage');
const content2 = document.querySelector('.variables');
const content3 = document.querySelector('.parameter');
const content4 = document.querySelector('.basic_func');
const content5 = document.querySelector('.for');
const content6 = document.querySelector('.if');
const content7 = document.querySelector('.def');
const content8 = document.querySelector('.bool');

let temp = document.querySelector('.menu_bar_logo');
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})

x1.addEventListener('click', () =>{
    temp.classList.toggle('active');
    content1.classList.toggle('active');
    temp = content1;
})
x2.addEventListener('click', () =>{
    temp.classList.toggle('active');
    content2.classList.toggle('active');
    temp = content2;
})
x3.addEventListener('click', () =>{
    temp.classList.toggle('active');
    content3.classList.toggle('active');
    temp = content3;
})
x4.addEventListener('click', () =>{
    temp.classList.toggle('active');
    content4.classList.toggle('active');
    temp = content4;
})
x5.addEventListener('click', () =>{
    temp.classList.toggle('active');
    content5.classList.toggle('active');
    temp = content5;
})
x6.addEventListener('click', () =>{
    temp.classList.toggle('active');
    content6.classList.toggle('active');
    temp = content6;
})
x7.addEventListener('click', () =>{
    temp.classList.toggle('active');
    content7.classList.toggle('active');
    temp = content7;
})
x8.addEventListener('click', () =>{
    temp.classList.toggle('active');
    content8.classList.toggle('active');
    temp = content8;
})
