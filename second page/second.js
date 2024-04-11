
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