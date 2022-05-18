import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { MovieListComponent } from "./movies/movie-list.component";
import { MovieDetailComponent } from "./movies/movie-detail/movie-detail.component";
import { LoginComponent } from "./login/login.component";
import { MovieDetailGuard } from "./movies/movie-detail/movie-detail.guard";

const routes: Routes = [
  { path: "movies", component: MovieListComponent },
  {
    path: "movies/:id",
    canActivate: [MovieDetailGuard],
    component: MovieDetailComponent,
  },
  { path: "welcome", component: WelcomeComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "**", component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
