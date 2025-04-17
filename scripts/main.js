document.addEventListener("DOMContentLoaded", function () {
    // Grab the elements
    const menu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('menuClose');
    const menuToggle = document.getElementById('menuToggle'); // If you have an open button
    const menuLinks = document.querySelectorAll('.mobile-menu-link');

    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        menu.classList.add('active');
      });
    }

    // Close the menu when the X is clicked
    closeBtn.addEventListener('click', () => {
      menu.classList.remove('active');
    });

    document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menu.classList.remove('active');
    }
    });
    // Close menu on link click and scroll
  menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Stop instant jump
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);

      if (target) {
        // Smooth scroll to target
        target.scrollIntoView({ behavior: 'smooth' });
      }

      // Close the menu overlay
      menu.classList.remove('active');
    });
});
});