/* Script Interatividade Vanilla JS - Sítio Histórico Kalunga */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Acordeons Customizados (Controlados via classe .active)
    document.querySelectorAll('.custom-accordion .accordion-header-custom').forEach(header => {
        header.addEventListener('click', () => {
            const card = header.closest('.accordion-card');
            const isActive = card.classList.contains('active');
            
            // Fecha todos os outros acordeons do mesmo grupo
            const parentAccordion = card.closest('.custom-accordion');
            parentAccordion.querySelectorAll('.accordion-card').forEach(otherCard => {
                otherCard.classList.remove('active');
            });
            
            // Se o atual não estava ativo, abre ele
            if (!isActive) {
                card.classList.add('active');
            }
        });
    });

});

