const refs = {
  mobileMenu: document.querySelector(".js-menu-container"),
  openMenuBtn: document.querySelector(".js-open-menu"),
  closeMenuBtn: document.querySelector(".js-close-menu"),
  mobileNav: document.querySelector(".mobile-nav"),
};

const toggleMenu = () => {
  const isMenuOpen =
    refs.openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    refs.openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    refs.mobileMenu.classList.toggle("is-open");

  const scrollLockMethod = !isMenuOpen
    ? "disableBodyScroll"
    : "enableBodyScroll";
  bodyScrollLock[scrollLockMethod](document.body);
};

refs.openMenuBtn.addEventListener("click", toggleMenu);
refs.closeMenuBtn.addEventListener("click", toggleMenu);
refs.mobileNav.addEventListener("click", (evt) => {
  evt.target.className === "mobile-nav__link" ? toggleMenu() : null;
});

// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 768px)").addEventListener("change", (evt) => {
  if (!evt.matches) return;
  refs.mobileMenu.classList.remove("is-open");
  refs.openMenuBtn.setAttribute("aria-expanded", false);
  bodyScrollLock.enableBodyScroll(document.body);
});
