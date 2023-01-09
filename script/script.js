let navbarLinks = document.querySelectorAll(".navbar a");

navbarLinks.forEach(link => {
  link.addEventListener("mouseenter", function(event) {
    event.target.style.color = "red";
  });
  link.addEventListener("mouseleave", function(event) {
    event.target.style.color = "black";
  });
});