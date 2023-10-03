function setupOverlay(openButtonId, closeButtonId, overlayId) {
  const openButton = document.getElementById(openButtonId);
  const closeButton = document.getElementById(closeButtonId);
  const overlay = document.getElementById(overlayId);

  openButton.addEventListener("click", () => {
    overlay.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    overlay.style.display = "none";
  });
}

setupOverlay("openSignIn", "closeSignIn", "overlay");
setupOverlay("openSignUp", "closeSignUp", "overlay2");
