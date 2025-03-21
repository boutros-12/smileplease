document.addEventListener("DOMContentLoaded", function() {
  const consoleElement = document.getElementById("console");
  const hackingSound = document.getElementById("hackingSound");
  const systemBeep = document.getElementById("systemBeep");

  // Play hacking sound continuously
  hackingSound.play().catch(error => {
    console.error("Audio autoplay was blocked by the browser:", error);
  });

  // Play beep sound immediately
  systemBeep.play().catch(error => {
    console.error("Beep sound autoplay was blocked by the browser:", error);
  });

  // Simulate hacking by typing messages
  const messages = [
    "Initializing hack tool...",
    "Connecting to target server...",
    "Bypassing firewall...",
    "Accessing database...",
    "Downloading sensitive data...",
    "Injecting malware...",
    "HACK COMPLETE. SYSTEM COMPROMISED."
  ];

  let currentMessageIndex = 0;

  function typeMessage(message, callback) {
    let index = 0;

    function type() {
      if (index < message.length) {
        consoleElement.textContent += message[index];
        index++;
        setTimeout(type, Math.random() * 100); // Random typing speed
      } else if (callback) {
        consoleElement.textContent += "\n";
        callback();
      }
    }

    type();
  }

  function startHacking() {
    if (currentMessageIndex < messages.length) {
      typeMessage(messages[currentMessageIndex], () => {
        currentMessageIndex++;
        setTimeout(startHacking, 500); // Delay between messages
      });
    } else {
      consoleElement.textContent += "\nPress any key to exit...\n";
      document.addEventListener("keydown", () => location.reload());
    }
  }

  // Start the simulation
  startHacking();
});
