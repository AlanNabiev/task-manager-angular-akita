import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html'
})
export class WelcomePageComponent {
  disable: boolean = false
  work(): void {
    this.disable = !this.disable
    console.log('working')
  }

}
