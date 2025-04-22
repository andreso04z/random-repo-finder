import { Repository } from "../../types/repository";
import { RepositoryResponse } from "../../types/repositoryResponse";

export async function fetchRepositoryByLanguage(language: string): Promise<Repository | null> {
    try {
        const response = await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&per_page=100`);

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const data: RepositoryResponse = await response.json();
    
        if (data.items.length === 0) {
        return null;
        }
        
        const randomIndex = Math.floor(Math.random() * data.items.length);
        const randomRepository: Repository = data.items[randomIndex];
        return randomRepository;

    } catch(error) {
        console.error("Error fetching GitHub repositories:", error);
        return null;
    }  
}