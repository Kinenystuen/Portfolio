
import { dropdownMenu } from "./buttons/hamburger.js";

import { scrollheader } from "./render/scroll.js";

// Fix vh 
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });