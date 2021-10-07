import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';

import { HeaderComponent } from './components/header/header.component';

import { AppRoutingModule } from './routing/routing.module';
import { MainModule } from './modules/main/main.module'
import { WelcomeModule } from './modules/welcome/welcome.module'
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    SharedModule,
    WelcomeModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
