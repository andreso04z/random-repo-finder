function toggle(button: HTMLElement, menu: HTMLElement, svgPath: SVGPathElement) {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        svgPath.setAttribute('d', 'M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z');
        return;
    }
    menu.classList.add('hidden');
    svgPath.setAttribute('d', 'M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z');
}   

export function toggleDropdown() {
    const dropdownButton = document.getElementById('dropdown-button');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const svgPath = document.getElementById('svg-path') as SVGPathElement | null;
    if (!dropdownButton || !dropdownMenu || !svgPath) {
        return;
    }
    dropdownButton.addEventListener('click', () => toggle(dropdownButton, dropdownMenu, svgPath));
    dropdownMenu.addEventListener('click', () => toggle(dropdownButton, dropdownMenu, svgPath));
}