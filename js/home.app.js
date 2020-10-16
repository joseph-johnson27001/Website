// jQuery function for icons and scrolling headers - Currently only for contact area
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


// Function for sent/failed messages

const messageButton = document.getElementById("message-button");
const sentMessage = document.getElementById("sent-message");
const failedMessage = document.getElementById("failed-message");

messageButton.addEventListener("click", () => {
  sentMessage.style.display = "none";
  failedMessage.style.display = "none";
    if (firstNameMessage.value == "" || secondNameMessage.value == "" || emailMessage.value == "" || messageMessage.value == "") {
      failedMessageSend();
      return
    }
    else {
      sendMessage();
      return
    }
});

function sendMessage() {
  sentMessage.style.display = "block";
}

function failedMessageSend() {
  failedMessage.style.display = "block";
}

// TO DO FOR CONTACT FORM

//CONTACT FORM VARIABLES

let firstNameMessage = document.getElementById("first-name-message");
let secondNameMessage = document.getElementById("second-name-message");
let emailMessage = document.getElementById("email-message");
let messageMessage = document.getElementById("message-message");

// Give all form areas an id and make into variables
// Check if they are blank
// If any are blank run  failedMessageSend
//If email is not an email = same thing
//If all are correct = sendMessage()
