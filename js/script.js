const pages = document.querySelectorAll(".page");
const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage");

let currentPage = 0;

// Function to show the current page
function showPage(index) {
  pages.forEach((page, i) => {
    page.style.transform = i === index ? "rotateY(0)" : "rotateY(180deg)";
    page.classList.toggle("hidden", i !== index);
  });
}

// Event listeners for buttons
prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

// Initialize
showPage(currentPage);
