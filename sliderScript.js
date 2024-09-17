const slides = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].style.display = "none";
  slides[index].style.display = "block";
  currentSlide = index;
  updateActiveDot(index);
  console.log(`index ${index}`);
}

console.log(prevBtn);
console.log(nextBtn);

prevBtn.addEventListener("click", () => {
  showSlide((currentSlide - 1 + slides.length) % slides.length);
  console.log(`prev clicked`);
});

nextBtn.addEventListener("click", () => {
  showSlide((currentSlide + 1) % slides.length);
  console.log(`next clicked`);
});

const dotsContainer = document.querySelector(".dots-container");

// Get all dots from the HTML
const dots = document.querySelectorAll(".dots-container span");

// Function to update the active dot
function updateActiveDot(index) {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Function to handle dot clicks
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    // Your logic to show the corresponding slide
    console.log(`Clicked dot ${index}`);
    // Update the active dot
    updateActiveDot(index);
    showSlide(index);
  });
});
