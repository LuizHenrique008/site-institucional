/* Interações da página. Nenhuma dependência ou armazenamento de dados. */
(() => {
  "use strict";
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const mobileViewport = window.matchMedia("(max-width: 1000px)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  function closeMenu(returnFocus = false) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    if (returnFocus) menuButton.focus();
  }

  menuButton.addEventListener("click", () => {
    if (menuButton.getAttribute("aria-expanded") === "true") return closeMenu();
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Fechar menu");
    navigation.classList.add("is-open");
    document.body.classList.add("menu-open");
  });

  navigation.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    closeMenu();
    // O foco acompanha o destino para preservar a navegação por teclado.
    const destination = document.querySelector(link.getAttribute("href"));
    if (destination) {
      destination.setAttribute("tabindex", "-1");
      destination.focus({ preventScroll: true });
    }
  });
  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (menuButton.getAttribute("aria-expanded") !== "true") return;
    if (event.key === "Escape") closeMenu(true);
    if (event.key === "Tab" && mobileViewport.matches) {
      const lastLink = navLinks[navLinks.length - 1];
      if (event.shiftKey && document.activeElement === menuButton) {
        event.preventDefault();
        lastLink.focus();
      } else if (!event.shiftKey && document.activeElement === lastLink) {
        event.preventDefault();
        menuButton.focus();
      }
    }
  });
  mobileViewport.addEventListener("change", () => closeMenu());

  function updateHeader() {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  function setActiveLink(id) {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => sectionObserver.observe(section));
    if (!reducedMotion.matches) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.remove("is-pending");
            revealObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.08 },
      );
      document.querySelectorAll(".reveal").forEach((element) => {
        element.classList.add("is-pending");
        revealObserver.observe(element);
      });
    }
  }
  window.addEventListener("hashchange", () => {
    const id = window.location.hash.slice(1);
    if (navLinks.some((link) => link.hash === `#${id}`)) setActiveLink(id);
  });
})();
