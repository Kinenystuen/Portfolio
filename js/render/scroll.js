const headerHome = document.querySelector(".headerHome");

// Add scroll event listener
export function scrollheader() {
    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        // Check if scrollPosition is greater than 0
        if (scrollPosition > 0) {
            headerHome.classList.add("visible");
        } else {
            headerHome.classList.remove("visible");
        }
    });
}

if (document.querySelector(".headerContainer")) {
    scrollheader();
}



/* Nav scroll - change active nav item on scroll*/

const headerHeight = window.offsetHeight;

function handleScroll() {
  let maxVisibleArea = 0;
  let activeNavLink = null;

  const sections = document.querySelectorAll('.nav-menu-a');

  sections.forEach(navLink => {
    const targetId = navLink.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (isElementInViewport(targetElement)) {
      const visibleArea = calculateVisibleArea(targetElement);
      if (visibleArea > maxVisibleArea) {
        maxVisibleArea = visibleArea;
        activeNavLink = navLink;
      }
    }
  });
  sections.forEach(navLink => {
    navLink.classList.remove('active');
  });
  if (activeNavLink) {
    activeNavLink.classList.add('active');
  }
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

function calculateVisibleArea(element) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
  return visibleHeight * rect.width;
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);