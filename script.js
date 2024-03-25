const checkbox = document.getElementById('dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (window.matchMedia('(max-width: 990px)').matches) {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            dropdownMenu.style.display = 'initial';
        } else {
            dropdownMenu.style.display = 'none';
        }
    });
}

