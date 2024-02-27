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



// /* Nav scroll - change active nav item */
// const navHome = document.getElementById("home");
// const navProjects = document.getElementById("myProjects");
// const navAbout = document.getElementById("aboutMe");
// const navContact = document.getElementById("contactMe");

// const headerHeight = header.offsetHeight;
// function handleNavOnScroll() {
//     const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  
//     if (scrollY <= aboutSection.offsetTop - headerHeight) {
//       navHome.classList.add("active");
//     } else {
//       navHome.classList.remove("active");
//     }
  
//     if (scrollY < aboutSection.offsetTop - headerHeight || scrollY > aboutSection.offsetTop + aboutSection.offsetHeight - headerHeight) {
//       navAbout.classList.remove("active");
//     } else if (scrollY >= aboutSection.offsetTop - headerHeight) {
//       navAbout.classList.add("active");
//     }
//     if (scrollY < portfolioSection.offsetTop - headerHeight || scrollY > maxScroll - footer.offsetHeight) {
//         navProjects.classList.remove("active");
//     } else if (scrollY >= portfolioSection.offsetTop - headerHeight) {
//         navProjects.classList.add("active");
//     }
  
//     if (scrollY < skillsSection.offsetTop - headerHeight || scrollY > skillsSection.offsetTop + skillsSection.offsetHeight - headerHeight) {
//       navSkills.classList.remove("active");
//     } else if (scrollY >= skillsSection.offsetTop - headerHeight) {
//       navSkills.classList.add("active");
//     }
  
//     if (scrollY >= maxScroll - footer.offsetHeight) {
//       navContact.classList.add("active");
//     } else {
//       navContact.classList.remove("active");
//     }
//   }

//   window.addEventListener("scroll", handleNavOnScroll);