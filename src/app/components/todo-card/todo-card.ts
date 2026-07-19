import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../interfaces/task';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-card.html',
  styleUrl: './todo-card.css',

})
export class TodoCard {

  task = input.required<Task>();

  private router = inject(Router);

  viewTask() {
    this.router.navigate(['/view-task', this.task().id]);
  }


}
