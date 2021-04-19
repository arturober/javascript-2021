import { Component, OnInit, ViewChild } from '@angular/core';
import { Result } from 'ngx-mapbox-gl/lib/control/geocoder-control.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lat = 38.4039418;
  lng = -0.5288701;
  zoom = 17;

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(
      pos => {
        this.lat = pos.coords.latitude;
        this.lng = pos.coords.longitude;
      }
    );
  }

  changePosition(result: Result) {
      this.lat = result.geometry.coordinates[1];
      this.lng = result.geometry.coordinates[0];
      console.log('New address: ' + result.place_name);
      console.log(result);
  }
}
