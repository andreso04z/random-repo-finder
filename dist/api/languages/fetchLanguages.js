export async function fetchLanguages(apiUrl) {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error(`Error fetching languages: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}
