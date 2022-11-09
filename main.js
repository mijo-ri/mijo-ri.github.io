// init swiper
const swiper = new Swiper('.swiper', {
  effect: 'fade',
  on: {
    slideChange: function (swiper) {
      // get background
      const nth = swiper.activeIndex + 1;
      const slide = document.querySelector(`.swiper-slide:nth-child(${nth})`);
      const background = slide.dataset.background;

      // set background on body element
      const body = document.querySelector('body');
      body.classList.remove('black');
      body.classList.remove('white');
      body.classList.add(background);
    },
  },
});

const getMousePosition = (event) => {
  var pos = 0;
  pos = event.clientX / window.innerWidth;
  return pos;
};

const handleSwipe = (event) => {
  const pos = getMousePosition(event);

  if (pos < 0.5) {
    swiper.slidePrev();
  } else {
    swiper.slideNext();
  }
};

const body = document.querySelector('body');
body.addEventListener('click', handleSwipe);
