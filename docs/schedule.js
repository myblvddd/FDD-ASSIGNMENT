document.addEventListener("DOMContentLoaded", () => {
    // 1. Timetable Filter Functionality
    const filterButtons = document.querySelectorAll(".time-filter-btn");
    const scheduleRows = document.querySelectorAll(".schedule-row");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const selectedCategory = button.getAttribute("data-category");

            scheduleRows.forEach(row => {
                const rowCategory = row.getAttribute("data-category");
                if (selectedCategory === "all" || rowCategory === selectedCategory) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        });
    });

    // 2. Download Calendar (.ICS format compatible with Google/Apple/Outlook)
    const downloadBtn = document.getElementById("downloadCalendarBtn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", () => {
            const icsContent = [
                "BEGIN:VCALENDAR",
                "VERSION:2.0",
                "PRODID:-//Explore Langkawi//Schedule Calendar//EN",
                "CALSCALE:GREGORIAN",
                
                // Event 1: Camping
                "BEGIN:VEVENT",
                "SUMMARY:Camping in Langkawi",
                "DESCRIPTION:Beachside bonfire and outdoor camping experience.",
                "LOCATION:Pasir Tengkorak Beach, Langkawi",
                "DTSTART:20260822T080000Z",
                "DTEND:20260823T020000Z",
                "END:VEVENT",

                // Event 2: Kayaking
                "BEGIN:VEVENT",
                "SUMMARY:Mangrove Kayaking",
                "DESCRIPTION:Guided kayaking tour through limestone caves.",
                "LOCATION:Kilim Geoforest Park, Langkawi",
                "DTSTART:20260823T013000Z",
                "DTEND:20260823T053000Z",
                "END:VEVENT",

                // Event 3: Jungle Trekking
                "BEGIN:VEVENT",
                "SUMMARY:Jungle Trekking",
                "DESCRIPTION:Rainforest hike across Gunung Raya trails.",
                "LOCATION:Gunung Raya Reserve, Langkawi",
                "DTSTART:20260823T000000Z",
                "DTEND:20260823T040000Z",
                "END:VEVENT",

                // Event 4: Ziplining
                "BEGIN:VEVENT",
                "SUMMARY:Ziplining Adventure",
                "DESCRIPTION:Canopy zip over Seven Wells waterfalls.",
                "LOCATION:Telaga Tujuh Canopy, Langkawi",
                "DTSTART:20260905T020000Z",
                "DTEND:20260905T050000Z",
                "END:VEVENT",

                "END:VCALENDAR"
            ].join("\r\n");

            const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.setAttribute("download", "Langkawi_Activities_Schedule_2026.ics");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    // 3. Print Timetable
    const printBtn = document.getElementById("printScheduleBtn");
    if (printBtn) {
        printBtn.addEventListener("click", () => {
            window.print();
        });
    }
});