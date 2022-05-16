import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { MovieListComponent } from "./movies/movie-list.component";

const routes: Routes = [
  { path: "movies", component: MovieListComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "**", component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
