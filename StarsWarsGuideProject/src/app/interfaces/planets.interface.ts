export interface Planets {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface PlanetsResponse {
    count: number;
    next: string;
    previous?: any;
    results: Planets[];
}
export interface DialogData {
    planetsInfo: Planets;
    url: string;
    color: string;
    urlImg: string
  }
  