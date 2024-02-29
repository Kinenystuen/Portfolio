import { displayPortfolio } from "../display/portfolioDisplay.js";

export async function fetchPortfolioData() {
    try {
        const response = await fetch(`json/portfolioData.json`);
        if (!response.ok) {
            throw new Error(`API request failed with status: ` + response.status);
        } else {
            const data = await response.json();
            displayPortfolio(data);
            return data;
        }
    } catch (error) {
        console.log("Error: " + error);
    }
}
fetchPortfolioData();