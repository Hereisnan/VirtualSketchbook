async function loadBook() {
    // Fetch the list of images from the server
    const response = await fetch('/images');
    const images = await response.json();
  
    const bookContainer = document.getElementById('book-container');
  
    // Generate the HTML structure for the book
    const bookHTML = `
      <input type="checkbox" id="checkbox-cover">
      ${images.map((_, index) => `<input type="checkbox" id="checkbox-page${index + 1}">`).join('')}
      <div class="book">
        <div class="cover">
          <label for="checkbox-cover"></label>
        </div>
        ${images.map((image, index) => `
          <div class="page" id="page${index + 1}">
            <div class="front-page">
              <h2>Page ${index + 1}</h2>
              <p>Image: ${image}</p>
              ${index < images.length - 1 ? `
                <label class="next" for="checkbox-page${index + 2}"><i class="fas fa-chevron-right"></i></label>
              ` : ''}
            </div>
            <div class="back-page">
              <img src="/images/display/${image}" alt="Page ${index + 1}">
              ${index > 0 ? `
                <label class="prev" for="checkbox-page${index}"><i class="fas fa-chevron-left"></i></label>
              ` : ''}
            </div>
          </div>
        `).join('')}
        <div class="back-cover"></div>
      </div>
    `;
  
    bookContainer.innerHTML = bookHTML;
  }
  
  // Call the function to load the book
  loadBook();
  