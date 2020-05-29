document.addEventListener("DOMContentLoaded", () => {
  /* display the menu when user scroll beyond some pixel  */
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 278 && window.innerWidth > 768) {
      document.querySelector(".header-middle").style.display = "block";
      document.querySelector(".menu-activities").style.position = "static";
    } else if (window.scrollY < 278 || window.innerWidth <= 768) {
      document.querySelector(".header-middle").style.display = "none";
      document.querySelector(".menu-activities").style.position = "absolute";
    }
  });

  // display lightbox
  document
    .querySelector("#btn-inscription")
    .addEventListener("click", (events) => {
      document.querySelector(".lightbox").style.display = "flex";
    });

  // hide lightbox
  document.querySelector(".lightbox-close a").addEventListener("click", () => {
    event.preventDefault();
    document.querySelector(".lightbox").style.display = "none";
  });
});
