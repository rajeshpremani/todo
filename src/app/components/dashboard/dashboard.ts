import { Component, inject } from '@angular/core';
import { TodoList } from '../todo-list/todo-list';
import { TaskStatus } from '../task-status/task-status';
import { CompletedTask } from '../completed-task/completed-task';
import { AddTaskModel } from '../add-task-model/add-task-model';
import { TaskService } from '../../services/task';


@Component({
  selector: 'app-dashboard',
  imports: [TodoList, TaskStatus, CompletedTask],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {


  private taskService = inject(TaskService);

  openAddTask() {
    this.taskService.openAddTask();
  }
}
