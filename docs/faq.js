const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    
    questionBtn.addEventListener('click', () => {
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        item.classList.toggle('active');
    });
});