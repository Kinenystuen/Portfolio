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



/* Nav scroll - change active nav item */

const headerHeight = window.offsetHeight;
console.log(headerHeight)

window.addEventListener('scroll', handleScroll);

function handleScroll() {
  const sections = document.querySelectorAll('.nav-menu-a');

  sections.forEach(navLink => {
    const targetId = navLink.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (isElementInViewport(targetElement)) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect(); // finds out the "cordinates" the element(rectangle)
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}



function handleNavOnScroll() {
    const maxScroll = document.documentElement.scrollHeight - window.offsetHeight;

    // if (scrollY === navHome.offsetTop) {
    //     navHome.classList.add("active");
    //   } else {
    //     navHome.classList.remove("active");
    //   }
    // if (scrollY <= navAbout.offsetTop - headerHeight) {
    //   navHome.classList.add("active");
    // } else {
    //   navHome.classList.remove("active");
    // }
  
    // if (scrollY < navAbout.offsetTop - headerHeight || scrollY > navAbout.offsetTop + navAbout.offsetHeight - headerHeight) {
    //   navAbout.classList.remove("active");
    // } else if (scrollY >= navAbout.offsetTop - headerHeight) {
    //   navAbout.classList.add("active");
    // }
    // if (scrollY < navProjects.offsetTop - headerHeight || scrollY > maxScroll - footer.offsetHeight) {
    //     navProjects.classList.remove("active");
    // } else if (scrollY >= navProjects.offsetTop - headerHeight) {
    //     navProjects.classList.add("active");
    // }
  
    // if (scrollY < navSkills.offsetTop - headerHeight || scrollY > navSkills.offsetTop + navSkills.offsetHeight - headerHeight) {
    //   navSkills.classList.remove("active");
    // } else if (scrollY >= navSkills.offsetTop - headerHeight) {
    //   navSkills.classList.add("active");
    // }
  
    // if (scrollY >= maxScroll - footer.offsetHeight) {
    //   navContact.classList.add("active");
    // } else {
    //   navContact.classList.remove("active");
    // }
    
  }

  window.addEventListener("scroll", handleNavOnScroll);