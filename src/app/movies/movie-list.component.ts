import { Component } from "@angular/core";

@Component({
  selector: "app-movies",
  templateUrl: "./movie-list.component.html",
})
export class MovieListComponent {
  subTitle: string = "映画リスト";
  imgWidth: number = 200;
  imgMargin: number = 2;
  movies: any[] = [
    {
      movieId: 1,
      name: "matrix4",
      director: "aa",
      releaseDate: "2022-01-10",
      actor: "Keanu Reevas",
      rate: 4,
      imageUrl: "assets/images/0.jpeg",
    },
    {
      movieId: 2,
      name: "matrix4",
      director: "aa",
      releaseDate: "2022-01-10",
      actor: "Keanu Reevas",
      rate: 3,
      imageUrl: "assets/images/1.jpeg",
    },
  ];
}
