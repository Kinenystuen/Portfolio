import { fetchSkillsData } from "../api/fetchSkillsData.js";
import { clearHTML } from "../render/clearHTML.js";

export async function displaySkills(data) {
    const skillsContainer = document.getElementById("skillsContainer");

    data.forEach((object) => {
        // create link and img elements
        const link = document.createElement("a");
        const img = document.createElement("img");

        link.href = object.href;
        img.src = object.imgSrc;
        link.className = "skillLink";
        img.className = "skillImg";

        link.appendChild(img);
        skillsContainer.appendChild(link);
    });
}
