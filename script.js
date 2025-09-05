// Smooth scrolling for nav links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Highlight active nav link
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".navbar a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
