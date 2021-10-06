import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/welcome/state/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  selectSignUp() {
    this.authService.updateAuthStatus(false)
  }

  selectSignIn() {
    this.authService.updateAuthStatus(true)
  }

}
