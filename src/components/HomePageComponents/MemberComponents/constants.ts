export const sliderSettings = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },

    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
