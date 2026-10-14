const CONFIG = {
  whatsappNumber: "5512992570432"
};

function whatsappUrl(message){
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-whatsapp]").forEach(el => {
  const message = el.getAttribute("data-message") ||
    "Olá! Vim pelo site do Iza Resolve e quero contar o que preciso resolver.";
  el.href = whatsappUrl(message);
  el.target = "_blank";
  el.rel = "noopener";
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if(toggle && nav){
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const observer = "IntersectionObserver" in window
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: .12})
  : null;

document.querySelectorAll(".reveal").forEach(el => {
  if(observer) observer.observe(el);
  else el.classList.add("visible");
});

document.getElementById("year").textContent = new Date().getFullYear();