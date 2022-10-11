import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";
import { Injectable } from "@angular/core";

@Injectable()
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
  constructor() {}
}
