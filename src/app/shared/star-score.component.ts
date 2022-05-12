import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-star-score",
  templateUrl: "./star-score.component.html",
  styleUrls: ["./star-score.component.scss"],
})
export class StarScoreComponent implements OnChanges {
  @Input() rating: number = 0;
  cropWidth: number = 75;
  @Output() call: EventEmitter<number> = new EventEmitter();

  ngOnChanges(): void {
    console.log("onchage");
    this.cropWidth = (this.rating * 75) / 5;
  }

  starClick(): void {
    this.call.emit(this.rating);
  }
}
