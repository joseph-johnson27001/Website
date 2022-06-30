/* =============================================================================
VARIABLES
================================================================================ */
// NAVIGATION
const btnContainer = document.getElementById("navbarNav");
const btns = btnContainer.getElementsByClassName("nav-link");

// NAVIGATION BUTTONS
const navHomeButton = document.getElementById("nav-home-button");
const navAboutButton = document.getElementById("nav-about-button");
const navServicesButton = document.getElementById("nav-services-button");
const navPortfolioButton = document.getElementById("nav-portfolio-button");
const navBlogButton = document.getElementById("nav-blog-button");
const navContactButton = document.getElementById("nav-contact-button");

// ON PAGE BUTTONS
const aboutMeButton = document.getElementById("about-me-button");
const servicesButton = document.getElementById("services-button");
const portfolioButton = document.getElementById("portfolio-button");
const blogButton = document.getElementById("blog-button");
const contactButton = document.getElementById("contact-button");
const homeButton = document.getElementById("home-button");

// CONTAINERS
const informationContentContainer = document.getElementById(
  "information-content-container"
);
const introTextContainer = document.getElementById("intro-text-container");
const aboutMeContainer = document.getElementById("about-me-container");
const servicesContainer = document.getElementById("services-container");
const portfolioContainer = document.getElementById("portfolio-container");
const blogContainer = document.getElementById("blog-container");
const contactContainer = document.getElementById("contact-container");

// ARRAYS
const allContentContainers = informationContentContainer.children;

/* ================================================================================
EVENT LISTENERS
================================================================================ */
// NAVIGATION BUTTON EVENT LISTENERS
// ============================================================================

navHomeButton.addEventListener("click", () => {
  hideCurrentSection();
  setTimeout(showIntroSection, 400);
});

navAboutButton.addEventListener("click", () => {
  hideCurrentSection();
  setTimeout(showAboutSection, 400);
});

navServicesButton.addEventListener("click", () => {
  hideCurrentSection();
  setTimeout(showServicesSection, 400);
});

navPortfolioButton.addEventListener("click", () => {
  hideCurrentSection();
  setTimeout(showPortfolioSection, 400);
});

navBlogButton.addEventListener("click", () => {
  hideCurrentSection();
  setTimeout(showBlogSection, 400);
});

navContactButton.addEventListener("click", () => {
  hideCurrentSection();
  setTimeout(showContactSection, 400);
});

// =============================================================================
// MAIN CONTENT BUTTON EVENT LISTENERS
// =============================================================================
aboutMeButton.addEventListener("click", () => {
  removeAndHide();
  navAboutButton.classList.add("active");
  setTimeout(showAboutSection, 400);
});

servicesButton.addEventListener("click", () => {
  removeAndHide();
  navServicesButton.classList.add("active");
  setTimeout(showServicesSection, 400);
});

portfolioButton.addEventListener("click", () => {
  removeAndHide();
  navPortfolioButton.classList.add("active");
  setTimeout(showPortfolioSection, 400);
});

blogButton.addEventListener("click", () => {
  removeAndHide();
  navBlogButton.classList.add("active");
  setTimeout(showBlogSection, 400);
});

contactButton.addEventListener("click", () => {
  removeAndHide();
  navContactButton.classList.add("active");
  setTimeout(showContactSection, 400);
});

homeButton.addEventListener("click", () => {
  removeAndHide();
  navHomeButton.classList.add("active");
  setTimeout(showIntroSection, 400);
});

/* =============================================================================
FUNCTIONS
================================================================================ */

// =============================================================================
// NAVIGATION FUNCTIONS
// =============================================================================

// Function to give targeted button active status
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    removeActiveNavClass();
    this.className += " active";
  });
}

// Function to remove active class on nav when clicking on screen BUTTONS
function removeActiveNavClass() {
  let current = document.getElementsByClassName("active");
  if (current.length > 0) {
    current[0].className = current[0].className.replace(" active", "");
  }
}

// =============================================================================
// MAIN CONTENT FUNCTIONS
// =============================================================================

// FUNCTION TO HIDE CURRENT SECTION

function hideCurrentSection() {
  for (let i = 0; i < allContentContainers.length; i++) {
    allContentContainers[i].classList.add("fade-out");
    setTimeout(function () {
      allContentContainers[i].classList.add("hide");
    }, 400);
  }
}

//Function to show introduction div

function showIntroSection() {
  introTextContainer.classList.remove("hide", "fade-out");
  introTextContainer.classList.add("fade-in");
}

// Function to show about section div

function showAboutSection() {
  aboutMeContainer.classList.remove("hide", "fade-out");
  aboutMeContainer.classList.add("fade-in");
}

// Funciton to show services div

function showServicesSection() {
  servicesContainer.classList.remove("hide", "fade-out");
  servicesContainer.classList.add("fade-in");
}

// Funciton to show portfolio div

function showPortfolioSection() {
  portfolioContainer.classList.remove("hide", "fade-out");
  portfolioContainer.classList.add("fade-in");
}

// Funciton to show blog div

function showBlogSection() {
  blogContainer.classList.remove("hide", "fade-out");
  blogContainer.classList.add("fade-in");
}
// Funciton to show contact div

function showContactSection() {
  contactContainer.classList.remove("hide", "fade-out");
  contactContainer.classList.add("fade-in");
}

// Combined function to remove active class on nav and to hide current section on PAGE

function removeAndHide() {
  removeActiveNavClass();
  hideCurrentSection();
}
