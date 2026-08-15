// Get the modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("expandedImg");
const captionText = document.getElementById("caption");

// Function to open the modal
function openModal(element) {
    // Show the modal
    modal.style.display = "block";
    
    // Find the image element inside the clicked gallery item
    const img = element.querySelector("img");
    
    // Set the modal image source and caption based on the clicked image
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Close the modal when the Escape key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});