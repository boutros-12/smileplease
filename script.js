document.addEventListener("DOMContentLoaded", function () {
  const beepSound = document.getElementById("beepSound");
  const progress = document.querySelector(".progress");
  let width = 0;

  // Play beep sound automatically when the page loads
  beepSound.play().catch(error => {
    console.error("Audio autoplay was blocked by the browser:", error);
  });

  // Simulate loading bar animation
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      document.querySelector(".message").textContent = "System failure detected. Shutting down...";
    } else {
      width++;
      progress.style.width = width + "%";
    }
  }, 50); // Simulates progress bar speed
});
