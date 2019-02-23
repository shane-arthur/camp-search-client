export interface Source {
    email: string;
    active: string;
    idcampdetails: number;
    phone: string;
    '@version': string;
    postalcode: string;
    '@timestamp': Date;
    city: string;
    website: string;
    province: string;
    campdetails?: any;
    address_line1: string;
    campname: string;
    address_line2: string;
}

export interface ICampData {
    _index: string;
    _type: string;
    _id: string;
    _score: number;
    _source: Source;
}
