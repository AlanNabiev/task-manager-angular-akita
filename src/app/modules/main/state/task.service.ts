import { Injectable } from '@angular/core';
import { task } from '../main.types';
import { TaskQuery } from './task.query';
import { TaskStore } from './task.store';

@Injectable({ providedIn: 'root' })
export class TaskService {

  constructor(private taskStore: TaskStore, private taskQuery: TaskQuery) {
  }

  async updateTaskList(task: task) {
    let taskList: Array<task> = await this.taskQuery.getTaskList().map((el) => {return el})
    taskList.push(task)
    this.taskStore.update({taskList})
  }

  async removeTaskFromList(task: task) {
    let taskList: Array<task> = await this.taskQuery.getTaskList().filter((el) => el !== task)
    this.taskStore.update({taskList})
  }

}
