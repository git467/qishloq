const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("close");
const body = document.body;
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

// Manipulate images with JavaScript

const bookImages = document.querySelectorAll(".book-img");

bookImages.forEach(img => {
  img.addEventListener("click", (e) => {

    // bodyga 
    e.stopPropagation();

    // boshqalardan activeni olib tashlash
    bookImages.forEach(other => {
      if (other !== img) {
        other.classList.remove("active");
      }
    });

    // activeni toggle qilish
    img.classList.toggle("active");
    
  });
});

body.addEventListener("click", () => {
  bookImages.forEach(img => {
    img.classList.remove("active");
  })
})
