
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("expandedImg");
const captionText = document.getElementById("caption");

function openModal(element) {
    modal.style.display = "block";

    const img = element.querySelector("img");

    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});