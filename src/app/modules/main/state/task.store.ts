import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { task } from '../main.types';

export interface TaskState {
   taskList: Array<task>
}

export function createInitialState(): TaskState {
  return {
    taskList: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'task' })
export class TaskStore extends Store<TaskState> {

  constructor() {
    super(createInitialState());
  }

}
