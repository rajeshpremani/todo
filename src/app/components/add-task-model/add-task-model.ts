import { Component, input, output, signal } from '@angular/core';
import { Task } from '../../interfaces/task';


@Component({
  selector: 'app-add-task-model',
  imports: [],
  templateUrl: './add-task-model.html',
  styleUrl: './add-task-model.css',
})
export class AddTaskModel {

  mode = input<'add' | 'edit'>('add');

  task = input<Task | null>(null);

  title = signal('');

  description = signal('');

  priority = signal('');

  dueDate = signal('');


  ngOnInit() {

    if (this.mode() === 'edit' && this.task()) {

      this.title.set(this.task()!.title);

      this.description.set(this.task()!.description);

      this.priority.set(this.task()!.priority);

      this.dueDate.set(this.task()!.dueDate);

    }
  }

  close = output<void>();

  goBack() {
    this.close.emit();
  }

  saveTask() {
    if (this.mode() === 'add') {
      // Logic to add a new task
      //const newTask: Task = {
      //  id: Date.now(), // Generate a unique ID for the new task
      //  title: this.title(),
      //  description: this.description(),
      //  priority: this.priority(),
      //  status: 'Pending', // Default status for a new task
      //  dueDate: this.dueDate(),
      //  progress: 0, // Default progress for a new task
      //  members: [] // Default members for a new task
      //};
      // Emit the new task to the parent component or service
      //this.close.emit(newTask);
    } else if (this.mode() === 'edit' && this.task()) {

      this.title.set(this.task()!.title);

      this.description.set(this.task()!.description);

      this.priority.set(this.task()!.priority);

      this.dueDate.set(this.task()!.dueDate);
      
      // Logic to update an existing task
      //const updatedTask: Task = {
      //  ...this.task()!,
      //  title: this.title(),
      //  description: this.description(),
      //  priority: this.priority(),
      //  dueDate: this.dueDate()
      //};
      // Emit the updated task to the parent
      //this.close.emit(updatedTask);
    }
  }
}
