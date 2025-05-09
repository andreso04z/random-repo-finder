import { fetchRepositoryByLanguage } from "../api/github/fetchRepository.js";
import { Repository } from "../types/repository.js";

function getSelectedLanguage(target: HTMLElement): string {
    return target.textContent || '';
}

function updateButtonText(button: HTMLButtonElement, text: string) {
    const svgElement = button.querySelector('svg');

    if (!svgElement) {
        console.error('SVG element not found in button');
        return;
    }

    button.textContent = '';
    const textNode = document.createTextNode(text);

    button.appendChild(textNode);
    button.appendChild(svgElement);
}

export function selectLanguage() {
    const menuDiv = document.getElementById('menu-div');
    const dropdownButton = document.getElementById('dropdown-button') as HTMLButtonElement;

    if (!menuDiv || !dropdownButton) {
        return;
    }

    menuDiv.addEventListener('click', async (e) => {
        const target = e.target as HTMLElement;
        if (!target || !target.textContent) return;

        const selectedLanguage = getSelectedLanguage(target);
        updateButtonText(dropdownButton, selectedLanguage);

        const fullResponse = await fetchRepositoryByLanguage(getSelectedLanguage(target));

        if (!fullResponse) {
            return;
        }

        const repoInfo: Repository = {
            name: fullResponse.name,
            description: fullResponse.description || "No description available",
            html_url: fullResponse.html_url,
            language: fullResponse.language,
            starred: fullResponse.starred,
            forked: fullResponse.forked
        }

        console.log(repoInfo);
    });
}