import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskService } from './services/task';
import { AddTaskModel } from './components/add-task-model/add-task-model';
//import { Dashboard } from './components/dashboard/dashboard'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddTaskModel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo');

  readonly taskService = inject(TaskService);
}
