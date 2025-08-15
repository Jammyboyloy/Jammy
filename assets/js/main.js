// AOS
AOS.init({
  duration: 1000, // animation duration in ms
  once: true     // only animate once on scroll
});
// Swiper 1 (Top banner — autoplay enabled)
const swiper1 = new Swiper('.bannerSwiper', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// Swiper 2 (Bottom section — NO autoplay)
var swiper2 = new Swiper('.mySwiper', {
  spaceBetween: 30,
  hashNavigation: {
    watchState: true,
  },
  navigation: {
    nextEl: ".second-next",
    prevEl: ".second-prev",
  },
});


// AOS
AOS.init({
  duration: 1000, // animation duration in ms
  once: true     // only animate once on scroll
});
