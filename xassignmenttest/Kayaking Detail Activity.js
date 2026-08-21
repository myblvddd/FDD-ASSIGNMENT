document.addEventListener("DOMContentLoaded", function () {
    // Array of image paths
    const images = [
        "media/kayaking.jpg",
        "media/kayaking2.jpg",
        "media/kayaking3.jpg",
        "media/kayaking4.jpg"
    ];

    let currentIndex = 0; // Starts at Image 1 (index 0)

    // DOM Elements
    const mainImage = document.getElementById("mainImage");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const thumbImages = document.querySelectorAll(".thumbnail-container .thumb-box img");

    // Function to update the main display image and highlight active thumbnail
    function updateGallery(index) {
        currentIndex = index;

        // Change main image
        if (mainImage) {
            mainImage.src = images[currentIndex];
        }

        // Highlight the matching active thumbnail box
        thumbImages.forEach((img, idx) => {
            const parentBox = img.parentElement;
            if (idx === currentIndex) {
                parentBox.style.borderColor = "rgb(0, 0, 122)";
                parentBox.style.transform = "scale(1.08)";
                parentBox.style.opacity = "1";
            } else {
                parentBox.style.borderColor = "#333";
                parentBox.style.transform = "scale(1)";
                parentBox.style.opacity = "0.7"; // Dim inactive thumbnails slightly
            }
        });
    }

    // Next Button (>) Event
    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % images.length;
            updateGallery(currentIndex);
        });
    }

    // Previous Button (<) Event
    if (prevBtn) {
        prevBtn.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateGallery(currentIndex);
        });
    }

    // Direct Thumbnail Click Events
    thumbImages.forEach((thumb, idx) => {
        thumb.addEventListener("click", function () {
            updateGallery(idx);
        });
    });

    // Initialize first image state on page load
    updateGallery(0);
});