document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("alert").style.display = "block";
  }, 5000); // Show alert after 5 seconds

  document.getElementById("restart").addEventListener("click", function() {
    alert("System restart initiated. Please wait...");
    setTimeout(function() {
      location.reload();
    }, 2000); // Reload page after 2 seconds
  });
});
