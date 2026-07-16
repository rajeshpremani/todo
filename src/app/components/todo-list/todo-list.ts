import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoCard } from '../todo-card/todo-card';
import { TaskService } from '../../services/task';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    TodoCard
  ],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {
  taskService = inject(TaskService);
}
