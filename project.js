function expand() {
  document.getElementById("myDropdown").classList.toggle("show"); // Function to expand/collapse the dropdown
}

window.addEventListener('DOMContentLoaded', () => {

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

window.addEventListener('DOMContentLoaded', () => {
  // Get the button
  let mybutton = document.getElementById("topButton");

  mybutton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  window.onscroll = function() {scrollFunction()};
  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
})
  


