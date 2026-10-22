// Shared JavaScript for theme switching, mobile navigation, and the contact form.

const themeButtons = document.querySelectorAll(".theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
}

function updateThemeButtons() {
  const dark = document.body.classList.contains("dark-theme");
  themeButtons.forEach((button) => {
    button.innerHTML = dark ? "☀ <span>Theme</span>" : "☾ <span>Theme</span>";
    button.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  });
}
updateThemeButtons();

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("portfolio-theme", theme);
    updateThemeButtons();
  });
});

// Mobile navigation menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      menuToggle.textContent = "☰";
    });
  });
}

// Automatically update the copyright year.
document.querySelectorAll(".year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

// A static GitHub Pages site has no server to receive contact form submissions.
// This form opens the visitor's default email application with a pre-filled message.
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const subject = formData.get("subject").trim();
    const message = formData.get("message").trim();

    // Replace this placeholder with the email address you want to receive messages.
    const recipient = "your.email@example.com";
    const body = `Name: ${name}\nReply email: ${email}\n\n${message}`;
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const status = document.querySelector("#form-status");
    status.textContent = "Opening your email app. If it doesn't open, email " + recipient + " directly.";
    window.location.href = mailto;
  });
}
