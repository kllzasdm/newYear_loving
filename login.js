// login.js
(() => {
  const H1 = "yara"; // allowed name
   const H2 = "Yara";
   const H3 = "YARA";
  const ALT = "me";

  const form = document.getElementById("loginForm");
  const input = document.getElementById("nameInput");
  const error = document.getElementById("error");

  // sparkles
  const sparkles = document.getElementById("sparkles");
  const SPARKLE_COUNT = 26;

  for (let i = 0; i < SPARKLE_COUNT; i++) {
    const sp = document.createElement("span");
    sp.style.left = Math.random() * 100 + "vw";
    sp.style.animationDuration = (6 + Math.random() * 10) + "s";
    sp.style.animationDelay = (Math.random() * 6) + "s";
    const size = 4 + Math.random() * 6;
    sp.style.width = size + "px";
    sp.style.height = size + "px";
    sparkles.appendChild(sp);
  }

  // swans
  const swans = document.getElementById("swans");
  const SWAN_COUNT = 14;

  for (let i = 0; i < SWAN_COUNT; i++) {
    const img = document.createElement("img");
    img.src = "swan.png";
    img.className = "bg-swan";

    const size = 80 + Math.random() * 60;
    const top = Math.random() * 85;
    const duration = 26 + Math.random() * 30;
    const delay = Math.random() * -60;
    const opacity = 0.05 + Math.random() * 0.06;

    img.style.width = size + "px";
    img.style.top = top + "vh";
    img.style.opacity = opacity;
    img.style.animationDuration = duration + "s";
    img.style.animationDelay = delay + "s";

    if (Math.random() > 0.5) img.classList.add("reverse");

    swans.appendChild(img);
  }

  // login check (NO STORAGE)
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const val = input.value.trim().toLowerCase();

    if (val === H1 ||val === H2 ||val === H3 || val === ALT) {
      window.location.href = "home.html";
    } else {
      error.classList.add("show");
    }
  });
})();
