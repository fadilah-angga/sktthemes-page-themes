document.addEventListener('DOMContentLoaded', function() {
  const toggler = document.querySelector('.custom-toggler');
  const navCollapse = document.querySelector('.nav-collapse');
  
  // Toggle Menu
  toggler.addEventListener('click', function() {
    this.classList.toggle('active');
    navCollapse.classList.toggle('active');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!toggler.contains(e.target) && !navCollapse.contains(e.target)) {
      toggler.classList.remove('active');
      navCollapse.classList.remove('active');
    }
  });
  
  // Reset on resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 991.98) {
      toggler.classList.remove('active');
      navCollapse.classList.remove('active');
    }
  });
});