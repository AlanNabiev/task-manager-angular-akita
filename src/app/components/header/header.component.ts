import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthQuery } from 'src/app/modules/welcome/state/auth.query';
import { AuthService } from 'src/app/modules/welcome/state/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private authQuery: AuthQuery) { }

  @Output() openNav = new EventEmitter<boolean>();

  openNavbar() {
    this.openNav.emit()
  }
  
  logInStatus$?: Observable<boolean>

  ngOnInit(): void {
    this.logInStatus$ = this.authQuery.selectLogInStatus()
  }

  selectSignUp() {
    this.authService.updateAuthStatus(false)
  }

  selectSignIn() {
    this.authService.updateAuthStatus(true)
  }

  logOutEvent() {
    this.authService.updateSelectedAccount({name: "", password: ""})
    this.authService.updateLogInStatus(false)
  }

}
