document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".event-filter-btn");
    const eventCards = document.querySelectorAll(".events-grid .event-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons and add to the clicked one
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const selectedCategory = button.getAttribute("data-category");

            eventCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (selectedCategory === "all" || cardCategory === selectedCategory) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});