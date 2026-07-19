import { Component, signal } from '@angular/core';
import { TodoList } from '../todo-list/todo-list';
import { TaskStatus } from '../task-status/task-status';
import { CompletedTask } from '../completed-task/completed-task';
import { AddTaskModel } from '../add-task-model/add-task-model';

@Component({
  selector: 'app-dashboard',
  imports: [TodoList, TaskStatus, CompletedTask, AddTaskModel],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  showAddTask = signal(false);

  openAddTask() {
    this.showAddTask.set(true);
  }

  closeAddTask() {
    this.showAddTask.set(false);
  }
}
