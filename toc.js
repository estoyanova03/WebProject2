window.addEventListener('DOMContentLoaded', () => {
  // Create a new IntersectionObserver instance
  const observer = new IntersectionObserver(entries => {
    // Callback function that will be executed whenever the observed elements intersect or stop intersecting
    entries.forEach(entry => {
      // Get the 'id' attribute value of the observed element
      const id = entry.target.getAttribute('id');
      // Check if the observed element is currently intersecting with the viewport
      if (entry.intersectionRatio > 0) {
        // If intersecting, add the 'active' class to the corresponding navigation link
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
      } else {
        // If not intersecting, remove the 'active' class from the corresponding navigation link
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach((section) => {
    // Use the IntersectionObserver to observe each section with an 'id'
    observer.observe(section);
  });
  
});