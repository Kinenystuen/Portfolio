import { fetchPortfolioData } from "../api/fetchPortfolioData.js";
import { clearHTML } from "../render/clearHTML.js";

const portfolioContainer = document.getElementById("portfolioContainer");

export async function displayPortfolio(data) {
  let delay = 0;
  clearHTML(portfolioContainer);
  data.forEach((object) => {
    // create card div
    const portfolioCard = document.createElement("div");
    portfolioCard.classList.add("pCard");

    // create img div and img object
    const pImgArea = document.createElement("div");
    pImgArea.className = "pImgArea";
    const pImg = document.createElement("img");
    pImg.src = object.image;
    pImg.alt = "A screenshot of the " + object.name + " website";
    pImg.className = "pImg";
    pImgArea.appendChild(pImg);

    // create info div 
    const pInfo = document.createElement("div");
    pInfo.className = "pInfo";
    // type of project
    const pType = document.createElement("p");
    pType.innerHTML = object.type;
    // Name of project
    const pTitle = document.createElement("h3");
    pTitle.className = "pTitle"
    pTitle.innerHTML = object.name;
    // Description of project
    const pDes = document.createElement("p");
    pDes.className = "pDes";
    pDes.innerHTML = object.description;

    pInfo.appendChild(pType);
    pInfo.appendChild(pTitle);
    pInfo.appendChild(pDes);

    // create buttons div and buttons 
    const pLinkArea = document.createElement("div");
    pLinkArea.className = "pLinkArea";
    const pLinkGitHub = document.createElement("a");
    const pLinkLiveVersion = document.createElement("a");
    pLinkGitHub.className = "pLink";
    pLinkGitHub.innerText = "GitHub repo";
    pLinkGitHub.href = object.githubRepo;
    pLinkLiveVersion.className = "pLink";
    pLinkLiveVersion.innerText = "Live site";
    pLinkLiveVersion.href = object.liveSite;
    pLinkArea.appendChild(pLinkGitHub);
    pLinkArea.appendChild(pLinkLiveVersion);

    pInfo.appendChild(pLinkArea)
    portfolioCard.appendChild(pImgArea);
    portfolioCard.appendChild(pInfo);
    portfolioContainer.appendChild(portfolioCard);

    // if the info text is longer than the box, add a scrollbar
    if (pInfo.clientHeight > 300) { // 20rem = 320px
        pInfo.style.overflowY = 'scroll';
    } else {
        pInfo.style.overflowY = 'hidden';
    }
  });
}

// Fetch portfolio data and then display it
// fetchPortfolioData()
//   .then((data) => displayPortfolio(data))
//   .catch((error) => console.error("Error fetching portfolio data:", error));
