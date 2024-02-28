import { displaySkills } from "../display/skillsDisplay.js";

let totalData;

export async function fetchSkillsData() {
    try {
        const response = await fetch(`json/skillsData.json`);
        if (!response.ok) {
            throw new Error(`API request failed with status: ` + response.status);
        } else {
            const data = await response.json();
            console.log(data);
            displaySkills(data);
            return data;
        }
    } catch (error) {
        console.log("Error: " + error);
    }
}
fetchSkillsData();