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

document.addEventListener('DOMContentLoaded', function() {
    const itemsPerPage = 12; 
    const themeCards = document.querySelectorAll('.theme-card');
    const paginationLinks = document.querySelectorAll('.page-link');
    let currentPage = 1;

    function showPage(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        themeCards.forEach((card, index) => {
            card.parentElement.style.display = 
                (index >= startIndex && index < endIndex) ? 'block' : 'none';
        });

        // Update active state
        paginationLinks.forEach(link => {
            link.parentElement.classList.remove('active');
            if(link.textContent == page) link.parentElement.classList.add('active');
        });
    }

    // Initial page load
    showPage(currentPage);

    // Pagination click handlers
    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const text = this.textContent;
            
            if(text === '»') {
                currentPage = Math.min(currentPage + 1, Math.ceil(themeCards.length/itemsPerPage));
            } else if(!isNaN(text)) {
                currentPage = parseInt(text);
            }
            
            showPage(currentPage);
        });
    });
});
