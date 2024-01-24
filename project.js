window.addEventListener('DOMContentLoaded', () => {

function expand() {
  document.getElementById("myDropdown").classList.toggle("show"); // Function to expand/collapse the dropdown
}

window.onclick = function(event) {  // Event listener for clicks anywhere in the window
  // Check if the clicked element is not a '.menuButton'
  if (!event.target.matches('.menuButton')) {
    // Get all elements with the class 'dropInfo'
    var dropdowns = document.getElementsByClassName("dropInfo");
    // Loop through the dropdown elements
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      // Check if the dropdown is currently shown (has the 'show' class)
      if (openDropdown.classList.contains('show')) {
        // If shown, hide the dropdown by removing the 'show' class
        openDropdown.classList.remove('show');
      }
    }
  }
}
})
