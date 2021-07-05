//Nav Menu Work

const menuBtn2 = document.querySelector('.nav_menu');
const crossbtn = document.querySelector('.nav_cross');
const navList = document.querySelector('.nav-list');
menuBtn2.addEventListener('click', () => {
    navList.style.right = "0";
    navList.style.display = "flex";
})
crossbtn.addEventListener('click', () => {
    navList.style.right = "-50vw";
    navList.style.display = "none";
})