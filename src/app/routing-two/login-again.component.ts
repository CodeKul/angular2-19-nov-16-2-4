import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login-again',
  templateUrl: './login-again.component.html',
  styleUrls: ['./login-again.component.css']
})
export class LoginAgainComponent implements OnInit {

  private isLoggedIn = true;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  goNewPage(userName: string, password: string) {
    if(userName == 'android' && password == 'android') {
      this.router.navigate(['new',userName],{queryParams : {first:'android' , ver :'7.0'}});
      this.isLoggedIn = true;
    }
    else this.isLoggedIn = false;
  }
}
