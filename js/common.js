// 상단 스크롤 바
const progressBar = document.querySelector(".progressBar");
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrolled = (scrollTop / height) * 100;

  progressBar.style.width = `${scrolled}%`;
});

// 이미지 슬라이드
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: "infinite",
  autoplay: {
    delay: 2000,
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
