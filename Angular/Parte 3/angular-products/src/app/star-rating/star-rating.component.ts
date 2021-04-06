import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input() rating;
  @Output() ratingChanged = new EventEmitter<number>();
  auxRating: number;

  constructor() { }

  ngOnInit(): void {
    this.auxRating = this.rating;
  }

  changeRating(rating) {
    this.ratingChanged.emit(rating);
  }
}
