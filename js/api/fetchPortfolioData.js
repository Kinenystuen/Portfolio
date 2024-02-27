import { displayPortfolio } from "../display/portfolioDisplay.js";

let totalData; // Define totalData outside the function if you intend to use it elsewhere

export async function fetchPortfolioData() {
    try {
        const response = await fetch(`json/portfolioData.json`);
        if (!response.ok) {
            throw new Error(`API request failed with status: ` + response.status);
        } else {
            const data = await response.json();
            console.log(data);
            // totalData = response.headers.get("X-WP-Total");
            displayPortfolio(data);
            return data;
        }
    } catch (error) {
        console.log("Error: " + error);
    }
}
fetchPortfolioData();
// Call fetchPortfolioData and either use await or handle the Promise
// await fetchPortfolioData(); // if calling from another async function
// fetchPortfolioData().then(data => console.log(data)); // if not using async/await
