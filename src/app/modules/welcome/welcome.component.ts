import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthQuery } from './state/auth.query';
import {register, auth} from './welcome.types'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {

  constructor(private authQuery: AuthQuery) { }

  authStatus$?: Observable<boolean>
  ngOnInit(): void {
    this.authStatus$ = this.authQuery.selectAuthStatus()
  }


  register: register = {
    name: "",
    password: "",
    repeatPassword: ""
  }

  auth: auth = {
    name: "",
    password: ""
  }

  

}
