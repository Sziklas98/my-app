console.log("Flash & Trade App Loaded");

// Simulated functionalities
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    console.log(`${button.textContent} triggered`);
  });
});
