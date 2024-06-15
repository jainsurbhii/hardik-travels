// header.js
document.addEventListener('DOMContentLoaded', function() {
    const headerPlaceholder = document.getElementById('header-placeholder');

    // Fetch and inject the header HTML
    fetch('../header.html')
        .then(response => response.text())
        .then(data => {
            headerPlaceholder.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching header:', error);
        });
});
