// CONTACT AREA

// jQuery function for icons and scrolling headers - Currently only for contact area


// Below function will make the icon bounce and the contact heading scroll in from the left when the user scrolls to that area

      var heading = document.getElementById("contact-heading");
  $(window).scroll(function() {
      var top_of_element = $("#contact-form").offset().top;
      var bottom_of_element = $("#contact-form").offset().top + $("#contact-form").outerHeight();
      var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      var top_of_screen = $(window).scrollTop();

      if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
          heading.style.display = "block";
      }
  });


// Variables for contact form

const messageButton = document.getElementById("message-button");
const sentNotificationButton = document.getElementById("sent-button");
const failedNotificationButton = document.getElementById("failed-button");
const sentMessage = document.getElementById("sent-message");
const failedMessage = document.getElementById("failed-message");

let firstNameMessage = document.getElementById("first-name-message");
let secondNameMessage = document.getElementById("second-name-message");
let emailMessage = document.getElementById("email-message");
let messageMessage = document.getElementById("message-message");


// Event listener for contact form send button

messageButton.addEventListener("click", () => {
    sentMessage.style.display = "none";
    failedMessage.style.display = "none";
      if (firstNameMessage.value == "" || secondNameMessage.value == "" || emailMessage.value == "" || messageMessage.value == "") {
        failedMessageSend();
      }
      else {
        sendMessage();
      }
});

// Event listener to close sent message notification

sentNotificationButton.addEventListener("click", () =>  {
  sentMessage.style.display = "none";
});


// Event listener to close failed message notificaiton

failedNotificationButton.addEventListener("click", () =>  {
  failedMessage.style.display = "none";
});

// Send message functiom

function sendMessage() {
  sentMessage.style.display = "block";
}

// Failed message function

function failedMessageSend() {
  failedMessage.style.display = "block";
}
