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

async function onSelection(e: Event, dropdownButton: HTMLButtonElement) {
    const target = e.target as HTMLElement;
    if (!target || !target.textContent) return;
    if (target.childElementCount > 1) {
        return;
    }

    const selectedLanguage = getSelectedLanguage(target);
    updateButtonText(dropdownButton, selectedLanguage);

    const fullResponse = await fetchRepositoryByLanguage(selectedLanguage);

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
}

export function selectLanguage() {
    const menuDiv = document.getElementById('menu-div');
    const dropdownButton = document.getElementById('dropdown-button') as HTMLButtonElement;

    if (!menuDiv || !dropdownButton) {
        return;
    }

    menuDiv.addEventListener('click', (e) => onSelection(e, dropdownButton));
}
