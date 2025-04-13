import { populateMenu } from "./utils/populateMenu.js";
import { toggleDropdown } from "./utils/toggleDropdown.js";
import { selectLanguage } from "./utils/selectLanguage.js";
addEventListener('DOMContentLoaded', async () => {
    toggleDropdown();
    await populateMenu();
    selectLanguage();
});
