const SITE_CONFIG = {
  companyName: "Empresa Premium",
  phone: "(15) 99149-2155",
  whatsapp: "5515991492155",
  email: "contato@empresa.com",
  address: "São Paulo - SP",
  primaryColor: "#6c63ff",
  secondaryColor: "#8f94fb",
  instagram: "#",
  facebook: "#",
  heroTitle: "Landing Pages Premium para Empresas",
  heroSubtitle: "Converta visitantes em clientes com uma estrutura moderna."
};

document.documentElement.style.setProperty(
  '--primary',
  SITE_CONFIG.primaryColor
);

document.documentElement.style.setProperty(
  '--secondary',
  SITE_CONFIG.secondaryColor
);

document.getElementById("companyName").innerText =
  SITE_CONFIG.companyName;

document.getElementById("heroTitle").innerText =
  SITE_CONFIG.heroTitle;

document.getElementById("heroSubtitle").innerText =
  SITE_CONFIG.heroSubtitle;

document.getElementById("instagramLink").href =
  SITE_CONFIG.instagram;

document.getElementById("facebookLink").href =
  SITE_CONFIG.facebook;

/* Loader */

window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
});

/* Mobile Menu */

const menuToggle =
  document.getElementById("menuToggle");

const nav =
  document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

/* Reveal Animation */

const reveals =
  document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach(el => {

    const top =
      el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }

  });

});

/* FAQ */

const faqQuestions =
  document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

  question.addEventListener("click", () => {

    const answer =
      question.nextElementSibling;

    answer.style.display =
      answer.style.display === "block"
      ? "none"
      : "block";

  });

});

/* Testimonials */

let currentTestimonial = 0;

const testimonials =
  document.querySelectorAll(".testimonial");

setInterval(() => {

  testimonials[currentTestimonial]
    .classList.remove("active");

  currentTestimonial =
    (currentTestimonial + 1)
    % testimonials.length;

  testimonials[currentTestimonial]
    .classList.add("active");

}, 4000);

/* Counter */

const counters =
  document.querySelectorAll(".counter");

const counterObserver =
  new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        const counter = entry.target;

        const target =
          +counter.dataset.target;

        let count = 0;

        const update = () => {

          count += target / 100;

          if(count < target){

            counter.innerText =
              Math.floor(count);

            requestAnimationFrame(update);

          } else {

            counter.innerText = target;

          }

        };

        update();

      }

    });

  });

counters.forEach(counter => {
  counterObserver.observe(counter);
});

/* Back To Top */

const backToTop =
  document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){

    backToTop.style.display = "block";

  } else {

    backToTop.style.display = "none";

  }

});

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

/* Theme Switcher */

const themeToggle =
  document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  const html =
    document.documentElement;

  const current =
    html.getAttribute("data-theme");

  html.setAttribute(
    "data-theme",
    current === "dark"
      ? "light"
      : "dark"
  );

});

/* Phone Mask */

const phoneInput =
  document.getElementById("phone");

phoneInput.addEventListener("input", e => {

  let value =
    e.target.value.replace(/\D/g, '');

  value = value.replace(
    /^(\d{2})(\d)/g,
    '($1) $2'
  );

  value = value.replace(
    /(\d{5})(\d)/,
    '$1-$2'
  );

  e.target.value = value;

});

/* Form */

const form =
  document.getElementById("contactForm");

form.addEventListener("submit", e => {

  e.preventDefault();

  const honeypot =
    form.querySelector('input[name="website"]');

  if(honeypot.value !== ''){

    return;

  }

  alert("Mensagem enviada!");

  form.reset();

});

/* Lazy Loading */

document.querySelectorAll("img").forEach(img => {
  img.loading = "lazy";
});