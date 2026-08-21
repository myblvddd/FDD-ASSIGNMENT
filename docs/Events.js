document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".sched-filter-btn");
    const scheduleCards = document.querySelectorAll(".schedule-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Update active state across buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const selectedCategory = button.getAttribute("data-category");

            // Filter schedule cards based on data-category attribute
            scheduleCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (selectedCategory === "all" || cardCategory === selectedCategory) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".event-filter-btn");
    const eventCards = document.querySelectorAll(".event-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Update active state on buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const selectedCategory = button.getAttribute("data-category");

            // Filter event cards based on category
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