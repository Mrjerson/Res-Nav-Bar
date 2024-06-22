document.getElementById('h_menu').addEventListener('click', function() {
    var h_menu = document.getElementById('h_menu');
    var x_menu = document.getElementById('x_menu');
    var nav_titles = document.getElementById('nav_titles');
    h_menu.style.display = 'none';
    x_menu.style.display = 'block';
    nav_titles.style.display = 'flex';
});
document.getElementById('x_menu').addEventListener('click', function() {
    var x_menu = document.getElementById('x_menu');
    var h_menu = document.getElementById('h_menu');
    var nav_titles = document.getElementById('nav_titles');
    x_menu.style.display = 'none';
    h_menu.style.display = 'block';
    nav_titles.style.display = 'none';
});