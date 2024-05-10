const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".nav-list");
const bars = document.querySelectorAll(".hamburger span");

window.addEventListener("load", function () { // Call addRequiredClasses() on page load
  handleWindowResize();
  addRequiredClasses();
});

window.addEventListener("resize", function () { // Call addRequiredClasses() when the window is resized
  handleWindowResize();
  addRequiredClasses();
});

// Event listener is added directly to the hamburger element using "click" event. - This change ensures that the click event is handled directly on the
//      hamburger element rather than relying on the load event.
hamburger.addEventListener("click", function () {
  
  mobileNav.classList.toggle("open"); // Toggle the 'open' class on nav-list

  //- In the second code, pointer events are explicitly set to "all" initially
  //      to allow interactions, then set back to "none" after a brief delay.
  //    - This change allows control over pointer events, ensuring that interactions
  //      are enabled when needed and disabled after a certain time.
  mobileNav.style.pointerEvents = ""; // Override CSS with !important
  
  //    - In the second code, the class toggling is handled directly within the
  //      event listener for the hamburger click event, based on the presence of
  //      "mobile" class on the body element.
  if (document.body.classList.contains("mobile")) {
    if (mobileNav.style.opacity === "1") { // Toggle the opacity between 0 and 1
      mobileNav.style.opacity = "0";
    } else {
      mobileNav.style.opacity = "1";
    }
  }
  
  // Update the hamburger icon based on the presence of the 'open' class
  if (mobileNav.classList.contains("open")) {
    bars[0].style.transform = "rotate(45deg)";
    bars[1].style.opacity = "0";
    bars[2].style.transform = "rotate(-45deg)";
  } else {
    bars[0].style.transform = "rotate(0deg)";
    bars[1].style.opacity = "1";
    bars[2].style.transform = "rotate(0deg)";
  }

  setTimeout(function () {
    mobileNav.style.pointerEvents = "none";
  }, 10);
  //This is applied to open navbar and the dropdown list after the hamburger is clicked.
});


function addRequiredClasses() {
  if (window.innerWidth < 860) {
    document.body.classList.add("mobile");
  } else {
    document.body.classList.remove("mobile");
  }
}
// Function to handle window resize event
function handleWindowResize() {
  // Check if the window width exceeds the mobile threshold
  if (window.innerWidth >= 860) {
    // Ensure nav-list is visible
    mobileNav.style.opacity = "1";
  } else {
    mobileNav.style.opacity = "0";
  }
}