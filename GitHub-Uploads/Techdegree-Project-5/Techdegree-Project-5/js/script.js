// SEARCHBOX SCRIPT

// Variables

const imageInfo = document.querySelectorAll('a');
const input = document.getElementById("searchbox");

// Event listener for Search Box

searchbox.addEventListener("keyup", photoSearch);

// Function to remove photos which have not been searched

function photoSearch() {
  let userInput = input.value.toLowerCase();
    for (let i = 0; i < imageInfo.length; i++) {
  let caption = imageInfo[i].getAttribute('data-caption').toLowerCase();
    if (caption.includes(userInput)) {
    imageInfo[i].style.display = 'block';
  } else {
    imageInfo[i].style.display = 'none';
  }
}}
