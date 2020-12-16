/* =============================================================================
VARIABLES
================================================================================ */
// NAVIGATION
const btnContainer = document.getElementById("navbarNav")
const btns = btnContainer.getElementsByClassName("nav-link")

//ACTIVITIES SECTION VARIABLES
const activityButtonLeft = document.getElementById("activity-button-left")
const activityButtonRight = document.getElementById("activity-button-right")
const firstActivityRowImages = document.getElementsByClassName("first-activity-row-images")
const secondActivityRowImages = document.getElementsByClassName("second-activity-row-images")
const thirdActivityRowImages = document.getElementsByClassName("third-activity-row-images")
const activityRowArray = [firstActivityRowImages, secondActivityRowImages, thirdActivityRowImages]

// BOTTOM SCROLL TO TOP BUTTON
const backToTopButton = document.getElementById("back-to-top-button")

/* =============================================================================
EVENT LISTENERS
================================================================================ */

//Event Listeners for activities left and right buttons
activityButtonLeft.addEventListener("click", leftButton)
activityButtonRight.addEventListener("click", rightButton)

// Event listener for scroll to top button
backToTopButton.addEventListener("click", scrollTop)
/* =============================================================================
FUNCTIONS
================================================================================ */


// ================================================================================
//NAVIGATION FUNCTIONS
// ================================================================================

// Function to give targeted button active status
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    removeActiveNavClass();
    this.className += " active";
  });
}

// Function to remove active class on nav when clicking on screen BUTTONS
function removeActiveNavClass() {
  let current = document.getElementsByClassName("active");
  if (current.length > 0) {
    current[0].className = current[0].className.replace("active", "");
  }
}

// ================================================================================
// ACTIVITIES SECTION FUNCTIONS
// ================================================================================

//Function for right activities button
function rightButton() {
  if (!firstActivityRowImages[0].classList.contains("hide")) {
    fadeOutImages()
    fadeInImages(secondActivityRowImages)
    return
    }
  if (!secondActivityRowImages[0].classList.contains("hide")) {
    fadeOutImages()
    fadeInImages(thirdActivityRowImages)
    return
    }
  if (!thirdActivityRowImages[0].classList.contains("hide")) {
    fadeOutImages()
    fadeInImages(firstActivityRowImages)
    return
    }
  }

//Function for left activities button
function leftButton() {
  if (!firstActivityRowImages[0].classList.contains("hide")) {
    fadeOutImages()
    fadeInImages(thirdActivityRowImages)
    return
    }
  if (!secondActivityRowImages[0].classList.contains("hide")) {
    fadeOutImages()
    fadeInImages(firstActivityRowImages)
    return
    }
  if (!thirdActivityRowImages[0].classList.contains("hide")) {
    fadeOutImages()
    fadeInImages(secondActivityRowImages)
    return
    }
  }

//Function to fade out activities images
function fadeOutImages() {
  for(let i = 0; i < activityRowArray.length; i++) {
    for (let j = 0; j < activityRowArray[i].length; j++) {
      activityRowArray[i][j].classList.add("fade-out")
      setTimeout(function(){
        activityRowArray[i][j].classList.add("hide")
      }, 400)
    }
  }
}

//Function to fade in activities images
function fadeInImages(rowName) {
  for (let i = 0; i < rowName.length; i++) {
  rowName[i].classList.remove("fade-out")
  rowName[i].classList.add("fade-in")
  setTimeout(function(){
    rowName[i].classList.remove("hide")
    }, 400)
  }
}


// ================================================================================
// BOTTOM BUTTON SCROLL TO TOP FUNCTION
// ================================================================================

function scrollTop() {
  window.scrollTo({
    top: 0, behavior: 'smooth'
  });
}
