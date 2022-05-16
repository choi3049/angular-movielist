import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MovieListComponent } from "./movies/movie-list.component";
import { ConvertPipe } from "./shared/convert.pipe";
import { StarScoreComponent } from "./shared/star-score.component";
import { WelcomeComponent } from "./welcome/welcome.component";

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ConvertPipe,
    StarScoreComponent,
    WelcomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
