export interface SearchDetails {
    camps?: Array<CampDetails>;
}

export interface CampDetails {
    email: string;
    active: boolean;
    idcampdetails: number;
    phone: string;
    version: number;
    postalcode: string;
    timestamp: Date;
    city: string;
    website: string;
    province: string;
    campdetails: CampDetail;
    address_line1: string;
    campname: string;
    address_line2: string;
}

export interface CampDetail {
    id: number | string;
}

export interface SearchRequest {
    searchTerm: string;
}
