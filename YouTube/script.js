var hamburgermenu = document.querySelector(".hamburger-menu");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

hamburgermenu.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");2
}