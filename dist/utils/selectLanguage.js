function getSelectedLanguage(target) {
    return target.textContent || '';
}
export function selectLanguage() {
    const menuDiv = document.getElementById('menu-div');
    if (!menuDiv) {
        return;
    }
    menuDiv?.addEventListener(('click'), (e) => {
        const target = e.target;
        if (!target) {
            return;
        }
        const selectedLanguage = getSelectedLanguage(target);
        // TO-DO: Pass selectedLanguage to GitHub API
    });
}
