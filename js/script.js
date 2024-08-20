


function stickyNavbar() {
    const container = document.getElementById('scrollContainer');
    const navbar = document.getElementById('navbar');
  

    if (container.scrollTop > 50) {
        console.log("Adding sticky class"); // Debugging line
        navbar.classList.add("sticky");
    } else {
        console.log("Removing sticky class"); // Debugging line
        navbar.classList.remove("sticky");
    }
}



const gridItems = document.querySelectorAll('.featured-cart');


gridItems.forEach(item => {
    item.addEventListener('click', function() {
        const url = "playlist.html"; // Get the URL from the data-url attribute
        window.location.href = url; // Redirect to the specified URL
    });
});













