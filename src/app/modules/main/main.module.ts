import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {MainComponent} from './main.component';
import { TaskListComponent } from './components/task-list/task-list.component'




@NgModule({
  declarations: [
    MainComponent,
    TaskListComponent
  ],
  imports: [
    SharedModule
  ]
})
export class MainModule { }
