// List Pokemon
export interface ResultI {
    name: string;
    url: string;
}

export interface PokemonI {
    count: number;
    next: string;
    previous?: any;
    results: ResultI[];
}

// Detail Pokemon
export interface DetailI {
    abilities: Ability[];
    base_experience: number;
    height: number;
    id: number;
    name: string;
    sprites: Sprites;
    weight: number;
    types: Type[];
}


export interface Ability2 {
    name: string;
    url: string;
}

export interface Ability {
    ability: Ability2;
}

export interface Sprites {
    other: Other;
}

export interface Other {
    dream_world: DreamWorld;
}

export interface DreamWorld {
    front_default: string;
}

export interface Type2 {
    name: string;
    url: string;
}

export interface Type {
    slot: number;
    type: Type2;
}