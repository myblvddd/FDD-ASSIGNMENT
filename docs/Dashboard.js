    function switchTab(tabName) {
        const scheduleSection = document.getElementById('schedule');
        const submissionsSection = document.getElementById('submissions');
        const scheduleLink = document.getElementById('link-schedule');
        const submissionsLink = document.getElementById('link-submissions');

        scheduleSection.style.display = 'none';
        submissionsSection.style.display = 'none';
        scheduleLink.classList.remove('active');
        submissionsLink.classList.remove('active');

        if (tabName === 'schedule') {
            scheduleSection.style.display = 'block';
            scheduleLink.classList.add('active');
        } else if (tabName === 'submissions') {
            submissionsSection.style.display = 'block';
            submissionsLink.classList.add('active');
        } 
    }