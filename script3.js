/* ************** zoom img domaine ************* */


const img1 = document.querySelector(".domaine1");
const img2 = document.querySelector(".domaine2");
const img3 = document.querySelector(".domaine3");
const pic = document.querySelector(".domaine1 img");

img1.addEventListener("mouseenter", function () {
  img1.classList.add("domaine-change");
  pic.classList.add("img-change");
});
img1.addEventListener("mouseleave", function () {
  img1.classList.remove("domaine-change");
  pic.classList.remove("img-change");
});
img2.addEventListener("mouseenter", function () {
  img2.classList.add("domaine-change");
  pic.classList.add("img-change");
});
img2.addEventListener("mouseleave", function () {
  img2.classList.remove("domaine-change");
  pic.classList.remove("img-change");
});
img3.addEventListener("mouseenter", function () {
  img3.classList.add("domaine-change");
  pic.classList.add("img-change");
});
img3.addEventListener("mouseleave", function () {
  img3.classList.remove("domaine-change");
  pic.classList.remove("img-change");
});

/* **********************************************fin zoom image *************************************** */