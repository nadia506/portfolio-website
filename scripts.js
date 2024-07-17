document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in").forEach((element) => {
    observer.observe(element);
  });

  // Responsive navigation menu
  const navbarMenu = document.querySelector(".header__menu");
  const navbarToggle = document.querySelector(".header__toggle");
  const logo = document.querySelector(".header__logo");

  navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("open");
    logo.classList.toggle("open");
  });

  // Close the menu when a link is clicked
  navbarMenu.addEventListener("click", () => {
    navbarMenu.classList.remove("open");
    logo.classList.remove("open");
  });
});

new TypeIt(".home__title--strong", {
  loop: true,
  speed: 100,
})
  .type(" Creative Developer")
  .pause(1000)
  .delete(18)
  .type(" Full-Stack Developer")
  .pause(1000)
  .delete(20)
  .type(" Product Manager")
  .pause(1000)
  .delete(16)
  .go();
