async function loadImages() {
  try {
    // fetch the local image data json file
    const response = await fetch("imageData.json");
    const images = await response.json();

    // get in book, start making pages
    const book = document.querySelector(".book");
    const bookParent = book.parentNode; // ensure position

    const styleSheet = document.createElement("style");
    document.head.appendChild(styleSheet);

    // Ensure the new page is on the top of the previous one
    let zIndex = 98; 
    for (let index = 0; index < images.length; index += 2) { 
      // first create check box for each page
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `checkbox-page${index / 2 + 1}`;
      bookParent.insertBefore(checkbox, book);  

      // Second create page
      const page = document.createElement("div");
      page.className = "page";
      page.id = `page${index / 2 + 1}`;
      page.style.zIndex = zIndex--; 

      // Each page should contain one front side and one back one
      const frontPage = document.createElement("div");
      frontPage.className = "front-page";
      const image1 = document.createElement("img");
      image1.src = images[index];
      frontPage.appendChild(image1);

      const backPage = document.createElement("div");
      backPage.className = "back-page";
      const image2 = document.createElement("img");
      image2.src = images[index + 1];
      backPage.appendChild(image2);

      // get two sides together -> a page!
      page.appendChild(frontPage);
      page.appendChild(backPage);

      const labelNext = document.createElement("label");
      labelNext.className = "next";
      labelNext.htmlFor = checkbox.id; //`checkbox-page${index + 1}`;
      labelNext.innerHTML = '<i class="fas fa-chevron-right"></i>';

      const labelPrev = document.createElement("label");
      labelPrev.className = "prev";
      labelPrev.htmlFor = checkbox.id; //`checkbox-page${index + 1}`;
      labelPrev.innerHTML = '<i class="fas fa-chevron-left"></i>';

      frontPage.appendChild(labelNext);
      backPage.appendChild(labelPrev);

      book.appendChild(page);

      styleSheet.sheet.insertRule(`
        #${checkbox.id}:checked ~ .book #page${index / 2 + 1} {
            transform: rotateY(-180deg);
            transition: transform 0.9s cubic-bezier(0.645, 0.045, 0.355, 1);
        }`, styleSheet.sheet.cssRules.length);

      console.log("Checkbox ID:", checkbox.id);
      console.log("Page ID:", page.id);

    }
  } catch (error) {
    console.error("Failed to load images:", error);
  }
}

loadImages();