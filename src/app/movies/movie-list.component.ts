import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { movie } from "./movie.model";
import { MovieService } from "./movie.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"],
})
export class MovieListComponent implements OnInit, OnDestroy {
  subTitle: string = "映画リスト";
  imgWidth: number = 55;
  imgMargin: number = 2;
  isImgDisplayed: boolean = false;

  subscription!: Subscription;

  private _filterText = "";
  get filterText(): string {
    return this._filterText;
  }
  set filterText(v: string) {
    this._filterText = v;
    this.filteredMovies = this.performFilter(v);
  }

  filteredMovies: movie[] = [];
  movies: movie[] = [];

  constructor(private movieService: MovieService) {}

  public ngOnInit(): void {
    this.subscription = this.movieService.getMovies().subscribe({
      next: (data) => {
        this.movies = data;
        this.filteredMovies = this.movies;
      },
      error: (error) => console.log(error),
      complete: () => console.log("complete"),
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public toggleImg(): void {
    this.isImgDisplayed = !this.isImgDisplayed;
  }

  public performFilter(filterBy: string): movie[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies.filter((movie: movie) => {
      return movie.name.toLocaleLowerCase().includes(filterBy);
    });
  }

  public callFromStar(rating: number) {
    console.log("from star : ", rating);
  }
}
