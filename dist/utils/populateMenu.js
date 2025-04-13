import { fetchLanguages } from "../api/languages/fetchLanguages.js";
export async function populateMenu() {
    const fetchedLanguages = await fetchLanguages("https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json");
    const menuDivElement = document.getElementById('menu-div');
    if (!fetchedLanguages || !Array.isArray(fetchedLanguages)) {
        console.log("Failed to fetch languages or invalid data received");
        return null;
    }
    if (fetchedLanguages.length === 0) {
        console.log("No languages received");
        return null;
    }
    fetchedLanguages.forEach((language) => {
        if (!language.value || language.value === "") {
            return;
        }
        const anchorElement = document.createElement('a');
        anchorElement.textContent = language.value;
        anchorElement.className = "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer";
        menuDivElement?.appendChild(anchorElement);
    });
}
