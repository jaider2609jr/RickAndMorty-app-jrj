export interface CharacterI {
    created:  Date;
    episode:  string[];
    gender:   Gender;
    id:       number;
    image:    string;
    location: Location;
    name:     string;
    origin:   Location;
    species:  Species;
    status:   Status;
    type:     string;
    url:      string;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    name: string;
    url:  string;
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}

export interface Info {
    count: number;
    pages: number;
    next:  string | null;
    prev:  string | null;
}

export interface dataUseCharacter { 
    setSearch:any, 
    info:Info, 
    characters:CharacterI[], 
    onPrevius: () => void, 
    onNext: () => void, 
    page: number, 
    loading: boolean
}