import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { MovieListComponent } from "./movies/movie-list.component";
import { ConvertPipe } from "./shared/convert.pipe";
import { StarScoreComponent } from "./shared/star-score.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { MovieDetailComponent } from "./movies/movie-detail/movie-detail.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ConvertPipe,
    StarScoreComponent,
    WelcomeComponent,
    MovieDetailComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
