// -------------------------------------------------
// FORCE LOAD AT TOP OF PAGE
// ------------------------------------------------

$(document).ready(function () {
  $(this).scrollTop(0);
});

// -------------------------------------------------
// SCROLLSPY
// ------------------------------------------------

$("body").scrollspy({ target: "#nav-top" });

// -------------------------------------------------
// FUNCITONS FOR MAIN TO LOAD AFTER .5 SECONDS
// ------------------------------------------------

setTimeout(function loadFunction() {
  document.getElementsByClassName("main-content")[0].style.display = "block";
  document.getElementById("nav-bottom").style.opacity = "1";
}, 0);
