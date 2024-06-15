document.addEventListener('DOMContentLoaded', function () {
    const headerPlaceholder = document.getElementById('header-placeholder');

    // Fetch and inject the header HTML
    fetch('../header.html')
        .then(response => response.text())
        .then(data => {
            headerPlaceholder.innerHTML = data;

            // Toggle menu functionality
            const menuToggle = document.querySelector('.menu-toggle');
            const navList = document.querySelector('.nav-list');

            menuToggle.addEventListener('click', function (event) {
                event.preventDefault();
                this.classList.toggle('active');
                navList.classList.toggle('active');
            });

            // Toggle menu on touch (for mobile devices)
            menuToggle.addEventListener('touchstart', function (event) {
                event.preventDefault();
                this.classList.toggle('active');
                navList.classList.toggle('active');
            });

        });
})
    .catch(error => {
        console.error('Error fetching header:', error);
    });
})
;
