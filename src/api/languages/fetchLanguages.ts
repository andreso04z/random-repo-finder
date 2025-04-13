import { LanguageOption } from "../../types/languageOption.js";

export async function fetchLanguages(apiUrl: string): Promise<LanguageOption[]> {
    const response = await fetch(apiUrl);
  
    if (!response.ok) {
      throw new Error(`Error fetching languages: ${response.statusText}`);
    }
  
    const data: LanguageOption[] = await response.json();
    return data;
}