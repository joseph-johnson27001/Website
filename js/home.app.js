// -------------------------------------------------
// FORCE LOAD AT TOP OF PAGE
// ------------------------------------------------

$(document).ready(function(){
    $(this).scrollTop(0);
});

// -------------------------------------------------
// NAVIGATION AREA
// ------------------------------------------------

// MAUAL CONTROLS FOR ACTIVE STATUS ON NAVIGATION

// var btnContainer = document.getElementById("navbarNavDropdown");
// var btns = btnContainer.getElementsByClassName("nav-link");
//
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace("active", "");
//     this.className += " active";
//   });
// }

// -------------------------------------------------
// SCROLLSPY
// ------------------------------------------------

$('body').scrollspy({ target: '#nav-top' })


// -------------------------------------------------
// FUNCITONS FOR MAIN TO LOAD AFTER .5 SECONDS
// ------------------------------------------------

 setTimeout(
      function loadFunction(){
          document.getElementsByClassName("main-content")[0].style.display = "block";
          document.getElementById("nav-bottom").style.opacity = "1";
      }, 780
);

// -------------------------------------------------
// FUNCITONS RELATING TO WHERE VIEWER IS ON PAGE
// ------------------------------------------------

// Funtion to make project cards appear on window scroll

var projectsHeading = document.getElementById("projects-heading");
var projectCardOne = document.getElementById("project-card-one");
var projectCardTwo = document.getElementById("project-card-two");
var projectCardThree = document.getElementById("project-card-three");

  $(window).scroll(function() {
      var top_of_element = $("#projects-heading").offset().top;
      var bottom_of_element = $("#projects-heading").offset().top + $("#projects-heading").outerHeight();
      var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      var top_of_screen = $(window).scrollTop();
        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            projectsHeading.style.display = "block";
            projectCardOne.style.display = "block";
            projectCardTwo.style.display = "block";
            projectCardThree.style.display = "block";
        }
  });

// Function for about items to appear on scroll

var aboutHeading = document.getElementById("about-container");
var southAfricaGallery = document.getElementById("south-africa-photo-gallery");
var chinaGallery = document.getElementById("china-photo-gallery");
var aboutArea = document.getElementById("about-area");
var travelHeading = document.getElementById("travel-heading");
var musicHeading = document.getElementById("music-heading");

  $(window).scroll(function() {
    var top_of_element = $("#about-container").offset().top;
    var bottom_of_element = $("#about-container").offset().top + $("#about-container").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();
      if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
          aboutArea.style.display = "block";
          aboutHeading.style.display = "block";
          travelHeading.style.display = "block";
          musicHeading.style.display = "block";
          setTimeout(
               function loadGalleries(){
                southAfricaGallery.style.transform = "translateX(0%)";
                chinaGallery.style.transform = "translateX(0%)";

                 //
                 // southAfricaGallery.style.display = "block";
                 // chinaGallery.style.display = "block";
               }, 500
         );
      }
});

// Function for contact headings to appear on scroll

var contactHeading = document.getElementById("contact-heading");

  $(window).scroll(function() {
      var top_of_element = $("#contact-form").offset().top;
      var bottom_of_element = $("#contact-form").offset().top + $("#contact-form").outerHeight();
      var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      var top_of_screen = $(window).scrollTop();
        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            contactHeading.style.display = "block";
        }
  });

// -------------------------------------------------
// CONTACT FORM AREA
// ------------------------------------------------

// Variables for contact form

// const messageButton = document.getElementById("message-button");
// const sentNotificationButton = document.getElementById("sent-button");
// const failedNotificationButton = document.getElementById("failed-button");
// const sentMessage = document.getElementById("sent-message");
// const failedMessage = document.getElementById("failed-message");
//
// let firstNameMessage = document.getElementById("first-name-message");
// let secondNameMessage = document.getElementById("second-name-message");
// let emailMessage = document.getElementById("email-message");
// let messageMessage = document.getElementById("message-message");
//
//
// // Event listener for contact form send button
//
// messageButton.addEventListener("click", () => {
//     sentMessage.style.display = "none";
//     failedMessage.style.display = "none";
//       if (firstNameMessage.value == "" || secondNameMessage.value == "" || emailMessage.value == "" || messageMessage.value == "") {
//         failedMessageSend();
//       }
//       else {
//         sendMessage();
//       }
// });
//
// // Event listener to close sent message notification
//
// sentNotificationButton.addEventListener("click", () =>  {
//   sentMessage.style.display = "none";
// });
//
// // Event listener to close failed message notificaiton
//
// failedNotificationButton.addEventListener("click", () =>  {
//   failedMessage.style.display = "none";
// });
//
// // Send message functiom
//
// function sendMessage() {
//   sentMessage.style.display = "block";
// }
//
// // Failed message function
//
// function failedMessageSend() {
//   failedMessage.style.display = "block";
// }
