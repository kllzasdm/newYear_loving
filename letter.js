// letter.js
(() => {
  const overlay = document.getElementById("letterOverlay");
  const envelope = document.getElementById("envelope");
  const secretBtn = document.getElementById("secretBtn");

  if (!overlay || !envelope || !secretBtn) return;

  const lockScroll = (lock) => {
    document.body.style.overflow = lock ? "hidden" : "";
  };

  function openLetter(){
    overlay.classList.add("show");
    lockScroll(true);

    envelope.classList.add("open");
    envelope.classList.remove("close");
  }

  function closeLetter(){
    envelope.classList.add("close");
    envelope.classList.remove("open");

    setTimeout(() => {
      overlay.classList.remove("show");
      lockScroll(false);
    }, 280);
  }

  secretBtn.addEventListener("click", openLetter);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeLetter();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("show")) closeLetter();
  });
})();
