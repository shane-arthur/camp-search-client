import { ICampData } from './camp.interface';

export interface SearchDetails {
    data: ICampData[];
}

export interface SearchRequest {
    searchTerm: string;
}
