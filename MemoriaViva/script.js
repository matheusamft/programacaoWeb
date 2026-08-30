

document.addEventListener('DOMContentLoaded', () => {

    
    document.querySelectorAll('.custom-accordion .accordion-header-custom').forEach(header => {
        header.addEventListener('click', () => {
            const card = header.closest('.accordion-card');
            const isActive = card.classList.contains('active');
            
            
            const parentAccordion = card.closest('.custom-accordion');
            parentAccordion.querySelectorAll('.accordion-card').forEach(otherCard => {
                otherCard.classList.remove('active');
            });
            
            
            if (!isActive) {
                card.classList.add('active');
            }
        });
    });

});

