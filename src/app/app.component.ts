import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  title = 'task-manager-angular-akita';

  navbarShow: boolean = false
  openNavEvent() {
    this.navbarShow = true
  }
  closeNavEvent() {
    this.navbarShow = false
  }
}
