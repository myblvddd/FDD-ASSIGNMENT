document.addEventListener("DOMContentLoaded", function () {
    const eventCards = document.querySelectorAll(".event");

    eventCards.forEach(card => {
        const slides = card.querySelectorAll(".slide");
        if (slides.length <= 1) return;

        let currentIndex = 0;

        setInterval(() => {
            slides[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add("active");
        }, 3500); // Changes image every 3.5 seconds
    });
});