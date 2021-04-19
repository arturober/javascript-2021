import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { NgModel, NgModelGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  user: User = {
    name: '',
    avatar: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.user.avatar = reader.result as string;
    });
  }

  validClasses(ngModel: NgModel | NgModelGroup, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid
    };
  }

  registrarse() {
    this.authService.register(this.user).subscribe(
      () => this.router.navigate(['/auth', 'login']),
      error => console.error(error)
    );
  }
}
