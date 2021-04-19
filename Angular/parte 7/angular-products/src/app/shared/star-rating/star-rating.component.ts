import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit, OnChanges {
  @Input() rating: number;
  @Output() ratingChanged = new EventEmitter<number>();
  auxRating: number;

  constructor() { }

  ngOnInit(): void {
    this.restoreRating();
  }

  ngOnChanges() {
    this.restoreRating();
  }

  changeRating(rating) {
    this.ratingChanged.emit(rating);
  }

  restoreRating() {
    this.auxRating = this.rating;
  }
}
