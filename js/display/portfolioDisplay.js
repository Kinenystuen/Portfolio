import { data } from "../data/portfolioData.js";

const portfolioContainer = document.getElementById("portfolioContainer");

export function displayPortfolio() {
    // Generate and render the portfolio items
    console.log(data)
data.forEach((object) => {

    /* 
    <div class="cardLink carousel-card" href="https://mountaintime.netlify.app/" style="flex: 0 0 calc(25% - 1.25rem);">
        <img src="/img/Mountain_life.png" alt="Image for Mountain Life website" class="carousel-img">
        <h3 class="carousel-title">Mountain Life - Project exam 1</h3>
    </div>
    */

	// Create a new portfolio object
	const portfolioCard = document.createElement("div");
    portfolioCard.className = "portfolio-card";

	// Create the image element
	const imageLink = document.createElement("a");
	imageLink.href = object.liveSite;
	const image = document.createElement("img");
    image.className = "portfolio-img";
	image.src = object.image;
	image.alt = "A screenshot of the" + object.name + "website";
	imageLink.appendChild(image);

	// Create text wrapper
	const textWrapper = document.createElement("div");

	// Create the title element
	const title = document.createElement("h3");
	title.textContent = object.name;

	// Create the description element
	const description = document.createElement("p");
	description.textContent = object.description;

	// Create link list
	const linkList = document.createElement("ul");

	// Create the GitHub link
	const listGh = document.createElement("li");
	const linkGh = document.createElement("a");
	linkGh.href = object.githubRepo;
	linkGh.textContent = "View GitHub repo";
	listGh.appendChild(linkGh);

	// Create the live link
	const listLs = document.createElement("li");
	const linkLs = document.createElement("a");
	linkLs.href = object.liveSite;
	linkLs.textContent = "View Live Site";
	listLs.appendChild(linkLs);

	// Append the links to the link list
	linkList.appendChild(listGh);
	linkList.appendChild(listLs);

	// Append text to the text wrapper
	textWrapper.appendChild(title);
	textWrapper.appendChild(description);
	textWrapper.appendChild(linkList);

	// Append the elements to the portfolio object
	portfolioCard.appendChild(imageLink);
	portfolioCard.appendChild(textWrapper);

	// Append the portfolio item to the portfolio wrapper
	portfolioContainer.appendChild(portfolioCard);
});
}
displayPortfolio();