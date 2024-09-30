

document.addEventListener("DOMContentLoaded", generateCards);
function openPopUp() {
  document.getElementById("pop-up").style.display = "flex";
}
window.addEventListener("click", function (event) {
  const popup = document.getElementById("pop-up");
  const post = document.querySelector(".post"); // the popup content
  if (event.target == popup && !post.contains(event.target)) {
    closePopUp();
  }
});

function closePopUp() {
  document.getElementById("pop-up").style.display = "none";
}
