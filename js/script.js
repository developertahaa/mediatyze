    const dropdownElements = document.querySelectorAll('.dropdown-toggle');
    dropdownElements.forEach(function(dropdownToggleEl) {
        if (window.innerWidth >= 992) { // lg breakpoint
            dropdownToggleEl.addEventListener('mouseenter', function() {
                const dropdownMenu = this.nextElementSibling;
                dropdownMenu.classList.add('show');
            });

            dropdownToggleEl.addEventListener('mouseleave', function() {
                const dropdownMenu = this.nextElementSibling;
                dropdownMenu.classList.remove('show');
            });
        }
    });

    // Add this script to handle the click and dropdown functionality
document.getElementById('servicesDropdown').addEventListener('click', function(event) {
if (event.target.tagName === 'A') {
    window.location.href = 'services.html';
}
});

