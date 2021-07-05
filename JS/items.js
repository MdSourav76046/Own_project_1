//creating menu in items js

const menuBtn = document.querySelector('.item_menu_btn');
const menu = document.querySelector('.menu');
const menuCrossbtn = document.querySelector('.menu_caption_div i');
const blankDisplay = document.querySelector('.blank');


const moveLeft = function () {
    menu.style.left = "-100vw";
    blankDisplay.style.display = "none";
}
menuBtn.addEventListener('click', () => {
    menu.style.left = "0";
    blankDisplay.style.display = "block";
})

menuCrossbtn.addEventListener('click', moveLeft);
blankDisplay.addEventListener('click', moveLeft);

//Creating Carousel image slider

const carouselBackground = document.querySelector('.carousel_background');
let index = 1;
showImg(index);

function btn_slide(e) {
    showImg(index = e);
}

function side_slide(e) {
    showImg(index += e);
}

function showImg(e) {
    let i;
    const img = document.querySelectorAll('.carousel-slide img');
    const sliders = document.querySelectorAll('.circle_pointer span');
    if (e > img.length) {
        index = 1;
    }
    if (e < 1) {
        index = img.length;
    }
    for (i = 0; i < img.length; i++){
        img[i].style.display = "none";
        sliders[i].style.backgroundColor = "transparent";
        sliders[i].style.color = "white";
    }
    img[index - 1].style.display = "block";
    sliders[index - 1].style.backgroundColor = "white";
    carouselBackground.style.background = "linear-gradient(to right,rgba(255,255,255,.5),rgba(0,0,0,.7))," + "url(" + img[index - 1].src + ")";
    carouselBackground.style.backgroundPosition = "center";
    carouselBackground.style.backgroundSize= "cover";

}

