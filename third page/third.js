
var sidebar = document.getElementById('sidebar');
var overlay = document.getElementById('overlay');

function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.style.display = (sidebar.classList.contains('active')) ? 'block' : 'none';
}

function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.style.display = 'none';
}

document.body.addEventListener('mousemove', function(event) {
    if (!sidebar.contains(event.target) && !event.target.classList.contains('menu-icon')) {
        closeSidebar();
    }
});




// Get the container element
var container = document.getElementById("size");

// Add click event listener to the container
container.addEventListener("click", function(event) {
    // Check if the clicked element is a div with the class 'selectable'
    if (event.target.classList.contains("selectable")) {
        // Deselect all divs
        var divs = container.querySelectorAll(".selectable");
        divs.forEach(function(div) {
            if (div !== event.target) {
                div.classList.remove("selected");
            }
        });

        // Toggle class 'selected' on the clicked div
        event.target.classList.toggle("selected");
    }
});