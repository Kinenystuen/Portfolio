
import { dropdownMenu } from "./buttons/hamburger.js";
import { scrollheader } from "./render/scroll.js";

import { fetchPortfolioData } from "./api/fetchPortfolioData.js";
import { displayPortfolio } from "./display/portfolioDisplay.js";
import { fetchSkillsData } from "./api/fetchSkillsData.js";
import { displaySkills } from "./display/skillsDisplay.js";

// portfolio card and dark/light mode
import { toggleInfo } from "./render/toggle.js";
import { toggleDarkLight } from "./render/toggle.js";

import { validateForm } from "./form/contact.js";


// Fix vh 
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });


  const observer = new IntersectionObserver((objects) => {
    objects.forEach((object) => {
        if (object.isIntersecting) {
            object.target.classList.add(`appear`);
        }
        else {
            object.target.classList.remove(`appear`);
        }
    })
})
const hiddenElements = document.querySelectorAll(".hiddenElement");
hiddenElements.forEach((object) => observer.observe(object));
