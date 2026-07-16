import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-task-status',
  imports: [],
  templateUrl: './task-status.html',
  styleUrl: './task-status.css',
})
export class TaskStatus {
  taskService = inject(TaskService);
}
