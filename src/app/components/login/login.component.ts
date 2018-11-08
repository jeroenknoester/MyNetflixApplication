import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/shared/data.service';
import { LoggedInService } from 'src/app/shared/logged-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router, private loggedInService: LoggedInService, private dataService: DataService) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.loggedInService.isLoggedIn();
  }

  logout() {
    localStorage.removeItem('loggedIn');
    this.router.navigate(['']);
  }

  login() {
    const ingetypteUser = this.loginForm.controls['username'].value;
    const ingetyptePw = this.loginForm.controls['password'].value;
    // tslint:disable-next-line:triple-equals
    const authorized = ingetypteUser == 'angular' && ingetyptePw == 'wachtwoord';

    if (authorized) {
      localStorage.setItem('loggedIn', String(Math.random() * 1000));

      // alleen maar om even met headers te spelen.
      this.dataService.getAllData().subscribe();
    }
  }
}
