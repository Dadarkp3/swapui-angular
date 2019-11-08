import { HomeWorld } from "./HomeWorld";
import { Specie } from "./Specie";
import { Starship } from "./Starship";

export class People {
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  name: string;
  skin_color: string;
  src: string;
  link: any;
  specie: any;
  ship: Starship[] = [];
  starships: [] = [];

  constructor() {
    this.ship = new Array<Starship>();
  }
}
