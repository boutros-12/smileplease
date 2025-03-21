document.addEventListener("DOMContentLoaded", function () {
  const beepSound = document.getElementById("beepSound");
  const playButton = document.getElementById("playSound");

  // Simulate loading bar animation
  const progress = document.querySelector(".progress");
  let width = 0;
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      document.querySelector(".message").textContent = "System failure detected. Shutting down...";
    } else {
      width++;
      progress.style.width = width + "%";
    }
  }, 50); // Simulates progress bar speed

  // Play beep sound when button is clicked
  playButton.addEventListener("click", function() {
    beepSound.play();
    alert("Yazan Ballani, please contact your system administrator for assistance.");
  });
});
