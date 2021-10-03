import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { InputComponent } from './shared/input/input.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { AppRoutingModule } from './routing/routing.module';
import { ButtonComponent } from './shared/button/button.component';
import { TaskListComponent } from './pages/main-page/components/task-list/task-list.component';
import { CheckboxComponent } from './shared/checkbox/checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    MainPageComponent,
    WelcomePageComponent,
    ButtonComponent,
    TaskListComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
