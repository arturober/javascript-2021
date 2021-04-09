import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit, OnChanges {
  @Input() rating!: number;
  @Output() ratingChanged = new EventEmitter<number>();
  auxRating!: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.auxRating = this.rating;
  }

  ngOnInit(): void {
    this.auxRating = this.rating;
  }

  changeRating(rating: number): void {
    this.ratingChanged.emit(rating);
  }
}
