import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-eventos';
  logged = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.loginChange$.subscribe(
      (logged: boolean) => this.logged = logged
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
