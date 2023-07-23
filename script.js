function toggleMenu() {
    var menuContent = document.getElementById("menu-content");
    menuContent.style.display = menuContent.style.display === "block" ? "none" : "block";
}

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });