const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("close");

const images = document.querySelectorAll(".img");

images.forEach(img => {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
});

closeBtn.onclick = function () {
  modal.style.display = "none";
};