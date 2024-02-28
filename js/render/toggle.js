// toggle for portfolio card
export function toggleInfo() {
  if (document.querySelector("pCard")) {
    document.addEventListener("click", function (event) {
      const card = document.querySelector("pCard");
      if (card && card.classList.contains("showInfo")) {
        card.classList.remove("showInfo");
      }
    });
  }
}

// Toggle between dark and light mode
export function toggleDarkLight() {
  const button = document.getElementById("icon");
  button.addEventListener("click", () => {
    document.documentElement.classList.toggle("light");
    document.querySelector(".circle").classList.toggle("clicked");
  });
}
toggleDarkLight();
