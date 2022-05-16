import { Injectable } from "@angular/core";
import { movie } from "./movie.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, tap, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  private movieUrl = "assets/json/movies.json";
  constructor(private http: HttpClient) {}

  getMovies(): Observable<movie[]> {
    return this.http.get<movie[]>(this.movieUrl).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = "error: ${error.error.message}";
    } else {
      errorMessage = "return code: ${error.status}, message${error.message}";
    }
    return throwError(() => new Error(errorMessage));
  }
}
