const slides = document.querySelectorAll(".slide");
const counter = document.getElementById("counter");
const progressBar = document.getElementById("progress-bar");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentSlide = 0;

function showSlide(index) {
  currentSlide = Math.max(0, Math.min(index, slides.length - 1));

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });

  counter.textContent =
    `${String(currentSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;

  progressBar.style.width =
    `${((currentSlide + 1) / slides.length) * 100}%`;

  prevButton.disabled = currentSlide === 0;
  nextButton.disabled = currentSlide === slides.length - 1;

  nextButton.textContent =
    currentSlide === slides.length - 1 ? "Fim ✓" : "Próximo →";
}

prevButton.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

nextButton.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    showSlide(currentSlide + 1);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === " ") {
    event.preventDefault();
    if (currentSlide < slides.length - 1) {
      showSlide(currentSlide + 1);
    }
  }

  if (event.key === "ArrowLeft") {
    showSlide(currentSlide - 1);
  }

  if (event.key === "Home") {
    showSlide(0);
  }

  if (event.key === "End") {
    showSlide(slides.length - 1);
  }
});

showSlide(0);
