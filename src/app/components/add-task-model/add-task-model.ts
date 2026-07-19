import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-task-model',
  imports: [],
  templateUrl: './add-task-model.html',
  styleUrl: './add-task-model.css',
})
export class AddTaskModel {
  close = output<void>();

  goBack() {
    this.close.emit();
  }
}
