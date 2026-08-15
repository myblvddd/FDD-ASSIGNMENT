  // Select all accordion header buttons
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  // Function to calculate and set the exact height needed to smoothly open
  function openAccordion(content) {
    content.style.maxHeight = content.scrollHeight + "px";
  }

  // Initialize the first item to be open by default (to match the second image)
  const initialOpenHeader = document.querySelector('.accordion-header.active');
  if (initialOpenHeader) {
      openAccordion(initialOpenHeader.nextElementSibling);
  }

  // Add click event listener to each header
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      // Toggle the 'active' class on the clicked header
      this.classList.toggle('active');

      // Get the content div immediately following the header
      const content = this.nextElementSibling;

      // Expand or collapse based on current max-height
      if (content.style.maxHeight) {
        content.style.maxHeight = null; // Collapse
      } else {
        openAccordion(content); // Expand
      }
    });
  });