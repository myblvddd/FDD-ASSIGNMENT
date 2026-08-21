document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const resourceCards = document.querySelectorAll(".resource-card");

    // 1. Category Filter Functionality
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Update active state on buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const selectedFilter = button.textContent.trim().toLowerCase();

            resourceCards.forEach(card => {
                const badge = card.querySelector(".card-badge");
                const category = badge ? badge.textContent.trim().toLowerCase() : "";

                // Logic for matching categories
                if (selectedFilter === "all resources") {
                    card.style.display = "flex";
                } else if (selectedFilter.includes("brochure") && category.includes("brochure")) {
                    card.style.display = "flex";
                } else if (selectedFilter.includes("template") && category.includes("template")) {
                    card.style.display = "flex";
                } else if (selectedFilter.includes("schedule") && category.includes("schedule")) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // 2. Download Feedback Notification
    const downloadButtons = document.querySelectorAll(".btn-download");
    
    downloadButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const fileName = btn.getAttribute("download") || "Resource File";
            showToast(`Downloading: ${fileName}`);
        });
    });

    // Helper: Simple Toast Notification
    function showToast(message) {
        let toast = document.getElementById("download-toast");
        
        if (!toast) {
            toast = document.createElement("div");
            toast.id = "download-toast";
            Object.assign(toast.style, {
                position: "fixed",
                bottom: "20px",
                right: "20px",
                backgroundColor: "rgb(0, 0, 122)",
                color: "#ffffff",
                padding: "12px 24px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                fontFamily: "Arial, sans-serif",
                fontSize: "14px",
                zIndex: "9999",
                opacity: "0",
                transition: "opacity 0.3s ease, transform 0.3s ease",
                transform: "translateY(20px)"
            });
            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";

        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateY(20px)";
        }, 3000);
    }
});