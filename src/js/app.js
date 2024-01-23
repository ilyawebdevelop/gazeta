import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import "./modules/fslightbox.js";
import "./modules/video.min.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';
import AirDatepicker from 'air-datepicker';


// import AirDatepicker from 'air-datepicker';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера projectsSlider
const articleGal = document.querySelector('.articleGal');
var mySwiperArticle = new Swiper(articleGal, {
  slidesPerView: 2,
  speed: 800,
  spaceBetween: 10,
  navigation: {
    nextEl: document.querySelector('.article .sliderArrowNext'),
    prevEl: document.querySelector('.article .sliderArrowPrev'),
  },
});

let searchInput = document.querySelector('.searchInputSect');
let searchInputDelete = document.querySelector('.searchInputDelete');
searchInputDelete?.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
});

new AirDatepicker('.calendarItemLg');
new AirDatepicker('.calendarItemSm');

// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.headerNavMobile');

const bodyEl = document.querySelector('body');
const menuLine1 = document.querySelector('.top-bun');
const menuLine2 = document.querySelector('.meat');
const menuLine3 = document.querySelector('.bottom-bun');


const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const toggleMenuLine = function () {
  menuLine1.classList.toggle('active');
  menuLine2.classList.toggle('active');
  menuLine3.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
  toggleMenuLine();
});

let headerSearchButtonCall = document.querySelector('.headerSearchButton');
let headerSearchMobile = document.querySelector('.headerSearchMobile');
let headerSearchBack = document.querySelector('.headerSearchBack'); 

headerSearchButtonCall.addEventListener('click', () => {
  console.log('12');
  headerSearchMobile.classList.add('active');
});
headerSearchBack.addEventListener('click', () => {
  headerSearchMobile.classList.remove('active');
});