/* wudhw */

export async function dropdownMenu() {
  const navMenu = document.querySelector(".nav-menu");
  const hamburgerMenu = document.querySelector(".hamburger_icon");

  hamburgerMenu.addEventListener("click", () => {
      const visibility = navMenu.getAttribute("data-visible");
      if (visibility === "false") {
          navMenu.setAttribute("data-visible", "true");
          hamburgerMenu.setAttribute("aria-expanded", "true");
          hamburgerMenu.classList.add('cross');
      } else if (visibility === "true") {
          navMenu.setAttribute("data-visible", "false");
          hamburgerMenu.setAttribute("aria-expanded", "false");
          hamburgerMenu.classList.remove('cross');
      }
  });
}

dropdownMenu();
function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    
  }
  