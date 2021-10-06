import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../routing/routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InputComponent } from '../shared/input/input.component';
import { ButtonComponent } from '../shared/button/button.component';
import { CheckboxComponent } from '../shared/checkbox/checkbox.component';




@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [ 
    CommonModule,
    AppRoutingModule,
    FormsModule,
    InputComponent,
    ButtonComponent,
    CheckboxComponent
  ],
})
export class SharedModule { }
