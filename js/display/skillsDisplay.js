import { fetchSkillsData } from "../api/fetchSkillsData.js";
import { clearHTML } from "../render/clearHTML.js";

export async function displaySkills(data) {
    const skillsContainer = document.getElementById("skillsContainer");
    clearHTML(skillsContainer);

    data.forEach((object) => {
        // create link and img elements
        const link = document.createElement("a");
        const img = document.createElement("img");

        link.href = object.href;
        link.title = object.alt;
        img.src = object.imgSrc;
        img.alt = object.alt;
        link.className = "skillLink";
        img.className = "skillImg";

        link.appendChild(img);
        skillsContainer.appendChild(link);
    });
}
