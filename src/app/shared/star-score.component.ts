import { Component, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-star-score",
  templateUrl: "./star-score.component.html",
  styleUrls: ["./star-score.component.scss"],
})
export class StarScoreComponent implements OnChanges {
  rating: number = 4;
  cropWidth: number = 75;

  ngOnChanges(): void {
    console.log("onchage");
    this.cropWidth = (this.rating * 75) / 5;
  }
}
