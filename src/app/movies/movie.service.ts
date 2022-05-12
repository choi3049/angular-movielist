import { Injectable } from "@angular/core";
import { movie } from "./movie.model";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  getMovies(): movie[] {
    return [
      {
        movieId: 1,
        name: "matrix4",
        director: "aa",
        releaseDate: "2022-01-10",
        actor: "Keanu Reevas",
        rate: 4,
        price: 2.4,
        imageUrl: "assets/images/0.jpeg",
      },
      {
        movieId: 2,
        name: "matrix-4",
        director: "aa",
        releaseDate: "2022-01-10",
        actor: "Keanu Reevas",
        rate: 3,
        price: 2.4,
        imageUrl: "assets/images/1.jpeg",
      },
    ];
  }
}
