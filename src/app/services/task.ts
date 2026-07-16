import { Injectable, signal } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly _tasks = signal<Task[]>([
    {
      id: 1,
      title: 'Attend Birthday Party',
      description: 'Buy gifts before reaching the venue.',
      priority: 'High',
      dueDate: 'Today',
      progress: 75,
      members: [
        'assets/images/profile.jpg',
        'assets/images/profile.jpg'
      ],
      completed: false
    },
    {
      id: 2,
      title: 'Landing Page Design',
      description: 'Complete dashboard UI.',
      priority: 'Medium',
      dueDate: 'Tomorrow',
      progress: 45,
      members: [
        'images/profile.jpg',
        'images/profile.jpg',
        'images/profile.jpg'
      ],
      completed: true
    },
    {
      id: 3,
      title: 'Meeting with Client',
      description: 'Discuss project scope.',
      priority: 'Low',
      dueDate: 'Friday',
      progress: 20,
      members: [
        'images/profile.jpg'
      ],
      completed: false
    }
  ]);

  readonly tasks = this._tasks.asReadonly();

}
