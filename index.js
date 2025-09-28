window.addEventListener("scroll", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.classList.remove("opacity-0");
    scrollToTopBtn.classList.add("opacity-100");
  } else {
    scrollToTopBtn.classList.remove("opacity-100");
    scrollToTopBtn.classList.add("opacity-0");
  }
});

document.getElementById("scrollToTopBtn").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

gsap
  .timeline()
  .from(".ta1", { duration: 2, x: -100, autoAlpha: 0, ease: "power2.out" })
  .from(".ta2", { duration: 2, x: 100, autoAlpha: 0, ease: "power2.out" }, "-=0.5"),
  gsap.from(".ta3", { duration: 2, opacity: 0, y: -50, delay: 2 });

// sh01 타임라인
const tl1 = gsap.timeline({ repeat: -1, yoyo: true });
tl1.to("#sh01", { duration: 3, opacity: 0, x: 20, y: -20 }).to("#sh01", { duration: 3, y: 20, opacity: 1 });

// sh02 타임라인
const tl2 = gsap.timeline({ repeat: -1, yoyo: true });
tl2.to("#sh02", { duration: 3, x: -20, opacity: 1 }).to("#sh02", { duration: 3, opacity: 0, x: 20, y: 20 });

gsap.registerPlugin(ScrollTrigger);

gsap.to(".gauge-html", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "100%",
});

gsap.to(".gauge-css", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "100%",
});

gsap.to(".gauge-js", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "80%",
});

gsap.to(".gauge-jq", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "80%",
});
gsap.to(".gauge-git", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "80%",
});
gsap.to(".gauge-node", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "50%",
});
gsap.to(".gauge-parcel", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "70%",
});
gsap.to(".gauge-sass", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "100%",
});
gsap.to(".gauge-tailwindcss", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "80%",
});
gsap.to(".gauge-ph", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "100%",
});
gsap.to(".gauge-il", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "100%",
});
gsap.to(".gauge-figma", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "60%",
});
gsap.to(".gauge-chatgpt", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "100%",
});
gsap.to(".gauge-midjourney", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "80%",
});

// 새로 추가된 스킬 게이지
gsap.to(".gauge-bootstrap", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "90%",
});
gsap.to(".gauge-oracle", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "90%",
});
gsap.to(".gauge-mysql", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "100%",
});
gsap.to(".gauge-java", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "100%",
});
gsap.to(".gauge-spring-boot", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "90%",
});
gsap.to(".gauge-mybatis", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "90%",
});
gsap.to(".gauge-jpa", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "80%",
});
gsap.to(".gauge-thymeleaf", {
  scrollTrigger: {
    trigger: "#skill",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "100%",
});

// ----------------------------------------

const emailLink = document.querySelector('a[href="mailto:orionrich3@naver.com"]');
const emailBg = emailLink.querySelector("#email-bg");
const emailText = emailLink.querySelector("#email-text");

const telLink = document.querySelector('a[href="tel:010-3553-3497"]');
const telBg = telLink.querySelector("#tel-bg");
const telText = telLink.querySelector("#tel-text");

emailLink.addEventListener("mouseenter", () => {
  gsap.to(emailBg, { duration: 0.5, x: "0%", ease: "power2.out" });
  gsap.to(emailText, { duration: 0.5, color: "#000", ease: "power2.out" });
});

emailLink.addEventListener("mouseleave", () => {
  gsap.to(emailBg, { duration: 0.5, x: "-100%", ease: "power2.out" });
  gsap.to(emailText, { duration: 0.5, color: "#000", ease: "power2.out" });
});

telLink.addEventListener("mouseenter", () => {
  gsap.to(telBg, { duration: 0.5, x: "0%", ease: "power2.out" });
  gsap.to(telText, { duration: 0.5, color: "#000", ease: "power2.out" });
});

telLink.addEventListener("mouseleave", () => {
  gsap.to(telBg, { duration: 0.5, x: "-100%", ease: "power2.out" });
  gsap.to(telText, { duration: 0.5, color: "#000", ease: "power2.out" });
});

const modalButtons = document.querySelectorAll("[data-modal-target]");
const modalCloseButtons = document.querySelectorAll("[data-modal-close]");

modalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal-target");
    const modal = document.querySelector(modalId);
    modal.classList.remove("hidden");
  });
});

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    modal.classList.add("hidden");
  });
});
