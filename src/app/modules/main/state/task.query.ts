import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { TaskStore, TaskState } from './task.store';

@Injectable({ providedIn: 'root' })
export class TaskQuery extends Query<TaskState> {

  constructor(protected store: TaskStore) {
    super(store);
  }

  selectTaskList() {
    return this.select(state => state.taskList)
  }
  getTaskList() {
    return this.getValue().taskList
  }

}
