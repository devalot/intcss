var frosted = document.getElementById("frosted-screen");
var body = document.querySelector("body");

body.addEventListener("click", function(event) {
  if (event.target.tagName !== "A") return;

  frosted.classList.add("screen-on");

  setTimeout(function() {
    frosted.classList.remove("screen-on");
  }, 1500);
});
