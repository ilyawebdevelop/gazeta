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
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

let searchInput = document.querySelector('.searchInputSect');
let searchInputDelete = document.querySelector('.searchInputDelete');
searchInputDelete?.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
});

new AirDatepicker('.calendarItem');