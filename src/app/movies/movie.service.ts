import { Injectable } from "@angular/core";
import { movie } from "./movie.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, tap, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  private movieUrl = "https://openapi.naver.com/v1/search/movie";
  constructor(private http: HttpClient) {}

  getMovies(): Observable<movie[]> {
    return this.http.get<movie[]>(this.movieUrl).pipe(
      tap((data) => console.log(JSON.stringify(data))), //tap은 Observable 스트림에서 방출된 값을 볼 수 있도록 해줌, JSON.stringify는 객체 또는 객체 배열을 JSON문자열로 변환하는 자바스크립트 메서드
      catchError(this.handleError) //catchError는 Error를 탐지해주는 연산자
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
