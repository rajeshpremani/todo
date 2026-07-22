import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-view-task',
  imports: [],
  templateUrl: './view-task.html',
  styleUrl: './view-task.css',
})
export class ViewTask {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly taskService = inject(TaskService);

  task = signal<Task | undefined>(undefined);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const task = this.taskService.getTaskById(id);

    this.task.set(task);
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  editTask() {
    if (this.task()) {
      this.taskService.openEditTask(this.task()!);
    }
  }
}
