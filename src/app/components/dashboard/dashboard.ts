import { Component } from '@angular/core';
import { TodoList } from '../todo-list/todo-list';
import { TaskStatus } from '../task-status/task-status';
import { CompletedTask } from '../completed-task/completed-task'; 

@Component({
  selector: 'app-dashboard',
  imports: [TodoList, TaskStatus, CompletedTask],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
