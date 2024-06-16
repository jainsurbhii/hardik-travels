document.addEventListener('DOMContentLoaded', function() {
    const bannerPlaceholder = document.getElementById('banner-placeholder');

    // Fetch and inject the banner HTML
    fetch('banner.html')
        .then(response => response.text())
        .then(data => {
            bannerPlaceholder.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching banner:', error);
        });
});
