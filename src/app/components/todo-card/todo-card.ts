import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-card.html',
  styleUrl: './todo-card.css',

})
export class TodoCard {

  //@Input() task!: Task; //old

  task = input.required<Task>();


}
