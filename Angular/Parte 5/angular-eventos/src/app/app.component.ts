import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-eventos';
  logged = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.logged$.subscribe(
      logged => this.logged = logged
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth', 'login']);
  }
}
