function toggleMenu() {
    var menuContent = document.getElementById("menu-content");
    menuContent.style.display = menuContent.style.display === "block" ? "none" : "block";
}

function insertPortfolioCode() {
  var portfolioCode = '<span>PORTFOLIO</span><span><a href="#">Graphics Portfolio</a> &mdash; <a href="#">Codind Portfolio</a></span>';
  var button = document.getElementsByClassName('button')[0];
  button.insertAdjacentHTML('afterend', portfolioCode);
}
