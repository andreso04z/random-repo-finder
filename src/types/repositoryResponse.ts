import { Repository } from "./repository";

export interface RepositoryResponse {
    total_count: number,
    incomplete_results: boolean;
    items: Repository[];
}