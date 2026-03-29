(function() {
    'use strict';
    
    const yearElement = document.getElementById('footer-year');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = '© ' + currentYear + ' • Todos os direitos reservados com o coração';
    }
})();
