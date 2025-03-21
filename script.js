document.addEventListener("DOMContentLoaded", function() {
  const consoleElement = document.getElementById("alert");
  const beepSound = document.getElementById("beepSound");
  const systemFailureSound = document.getElementById("systemFailure");
  const restartButton = document.getElementById("restart");
  const scanButton = document.getElementById("scan");
  const systemMessage = document.getElementById("systemMessage");

  // Play sound automatically when the page loads
  beepSound.play().catch(error => {
    console.error("Audio autoplay was blocked by the browser:", error);
  });

  // Show alert after a delay
  setTimeout(function() {
    consoleElement.style.display = "block";
  }, 5000); // Show alert after 5 seconds

  // Restart system button click event
  restartButton.addEventListener("click", function() {
    alert("System restart initiated. Please wait...");
    systemFailureSound.play(); // Play system failure sound
    setTimeout(function() {
      location.reload();
    }, 2000); // Reload page after 2 seconds
  });

  // Scan system button click event
  scanButton.addEventListener("click", function() {
    systemMessage.textContent = "Scanning for malware... ";
    setTimeout(function() {
      systemMessage.textContent = "Malware detected! System compromised.";
      beepSound.play(); // Play beep sound
    }, 2000); // Update message after 2 seconds
  });
});
