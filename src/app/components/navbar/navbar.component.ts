import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthQuery } from 'src/app/modules/welcome/state/auth.query';
import { AuthService } from 'src/app/modules/welcome/state/auth.service';
import { account } from 'src/app/modules/welcome/state/auth.types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,private authQuery: AuthQuery) { }
  ngOnInit(): void {
  }
  selectedAccount$: account = this.authQuery.getSelectedAccount()
  @Output() closeNav = new EventEmitter<boolean>();

  closeNavbar() {
    this.closeNav.emit()
  }

  selectSignUp() {
    this.authService.updateAuthStatus(false)
    this.closeNav.emit()
  }

  selectSignIn() {
    this.authService.updateAuthStatus(true)
  }
}
