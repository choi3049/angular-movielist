import { Component, OnInit } from "@angular/core";
import { movie } from "./movie.model";

@Component({
  selector: "app-movies",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"],
})
export class MovieListComponent implements OnInit {
  subTitle: string = "映画リスト";
  imgWidth: number = 200;
  imgMargin: number = 2;
  isImgDisplayed: boolean = false;
  // filterText = "";
  private _filterText = "";
  get filterText(): string {
    return this._filterText;
  }
  set filterText(v: string) {
    this._filterText = v;
    this.filteredMovies = this.performFilter(v);
  }

  public performFilter(filterBy: string): movie[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies.filter((movie: movie) => {
      return movie.name.toLocaleLowerCase().includes(filterBy);
    });
  }

  filteredMovies: movie[] = [];
  movies: movie[] = [
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

  public toggleImg(): void {
    this.isImgDisplayed = !this.isImgDisplayed;
  }

  public ngOnInit(): void {
    console.log("Angular Lifecycle : ngOnInit()");
  }
}
