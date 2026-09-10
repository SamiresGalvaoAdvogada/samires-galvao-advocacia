/*
  Preencha os dados abaixo antes de publicar.
  O WhatsApp deve conter apenas números, com código do país e DDD.
*/
const siteConfig = {
  whatsapp: "",
  whatsappLabel: "[PREENCHER NÚMERO]",
  email: "",
  city: "[PREENCHER CIDADE E REGIÃO]",
  oab: "OAB/UF [PREENCHER]"
};

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-nav");

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("open");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  navigation.classList.toggle("open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
});

navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const whatsapp = document.querySelector('[data-contact="whatsapp"]');
const email = document.querySelector('[data-contact="email"]');
const city = document.querySelector(".contact-line.static strong");

if (siteConfig.whatsapp) {
  whatsapp.href = `https://wa.me/${siteConfig.whatsapp}`;
  whatsapp.target = "_blank";
  whatsapp.rel = "noopener noreferrer";
  whatsapp.querySelector("strong").textContent = siteConfig.whatsappLabel;
} else {
  whatsapp.setAttribute("aria-disabled", "true");
  whatsapp.addEventListener("click", (event) => event.preventDefault());
}

if (siteConfig.email) {
  email.href = `mailto:${siteConfig.email}`;
  email.querySelector("strong").textContent = siteConfig.email;
} else {
  email.setAttribute("aria-disabled", "true");
  email.addEventListener("click", (event) => event.preventDefault());
}

city.textContent = siteConfig.city;
document.querySelectorAll(".professional-id, .site-footer div > p:first-child").forEach((item) => {
  item.textContent = siteConfig.oab;
});
document.getElementById("year").textContent = new Date().getFullYear();
