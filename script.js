// ── Typing animation ──────────────────────────────────────────
const texts = [
  "Front-End Developer",
  "React Developer",
  "UI/UX Enthusiast",
  "Creative Tech Builder"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) count = 0;

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }

  setTimeout(type, 120);
})();


// ── Formulário → WhatsApp ─────────────────────────────────────
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name    = document.querySelector('.contact-form input[type="text"]').value.trim();
  const email   = document.querySelector('.contact-form input[type="email"]').value.trim();
  const message = document.querySelector(".contact-form textarea").value.trim();

  if (!name || !email || !message) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const text = `Olá Camilla! 👋\n\nMeu nome é *${name}*\nE-mail: ${email}\n\n${message}`;

  const url = `https://wa.me/5583921421811?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
});
