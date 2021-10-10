import { Component, OnInit } from '@angular/core';
import { task } from './main.types';
import { TaskService } from './state/task.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  task: task = {
    name: "",
    description: "",
    status: "pending"
  }

  addTask() {
    this.taskService.updateTaskList(this.task)
  }
  
  clearTask() {
    this.task.name = ""
  }
}
