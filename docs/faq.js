const accordionHeaders = document.querySelectorAll('.accordion-header');

  function openAccordion(content) {
    content.style.maxHeight = content.scrollHeight + "px";
  }

  const initialOpenHeader = document.querySelector('.accordion-header.active');
  if (initialOpenHeader) {
      openAccordion(initialOpenHeader.nextElementSibling);
  }

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      this.classList.toggle('active');

      const content = this.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null; // Collapse
      } else {
        openAccordion(content); // Expand
      }
    });
  });