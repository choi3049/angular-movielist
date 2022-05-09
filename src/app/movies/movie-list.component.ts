import { Component } from "@angular/core";

@Component({
  selector: "app-movies",
  templateUrl: "./movie-list.component.html",
})
export class MovieListComponent {
  subTitle: string = "映画リスト";
  movies: any[] = [
    {
      movieId: 1,
      name: "matrix4",
      director: "aa",
      releaseDate: "2022-01-10",
      actor: "Keanu Reevas",
      rate: 4,
      imageUrl: "",
    },
    {
      movieId: 2,
      name: "matrix4",
      director: "aa",
      releaseDate: "2022-01-10",
      actor: "Keanu Reevas",
      rate: 3,
      imageUrl: "",
    },
  ];
}
