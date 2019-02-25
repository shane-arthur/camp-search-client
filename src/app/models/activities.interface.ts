export interface Activities {
    data: Activity[];
}

export interface Activity {
    name: string;
    id: number | string;
    camps: Camp[];
}

export interface Camp {
    campId: number | string;
    campName: string;
}

