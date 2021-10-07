import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthQuery } from './state/auth.query';
import { AuthService } from './state/auth.service';
import { account } from './state/auth.types';
import {register, auth} from './welcome.types'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {

  constructor(private authQuery: AuthQuery, private authService: AuthService) { }

  authStatus$?: Observable<boolean>
  accounts$?: Observable<Array<account>>
  ngOnInit(): void {
    this.authStatus$ = this.authQuery.selectAuthStatus()
    this.accounts$ = this.authQuery.selectAccounts()
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

  registerEvent() {
    const account: account = {
      name: this.register.name,
      password: this.register.password
    }
    this.authService.updateAccount(account)
  }

  

}
