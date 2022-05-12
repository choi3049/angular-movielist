import { Component, OnInit } from "@angular/core";
import { MovieService } from "./movie.service";
import { movie } from "./movie.model";

@Component({
  selector: "app-movies",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"],
  providers: [MovieService],
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
  movies: movie[] = [];

  constructor(private movieService: MovieService) {}
  public ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    this.filteredMovies = this.movies;
  }

  public toggleImg(): void {
    this.isImgDisplayed = !this.isImgDisplayed;
  }

  public callFromStar(rating: number) {
    console.log("from star : ", rating);
  }
}
