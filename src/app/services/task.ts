import { Injectable, signal, computed } from '@angular/core';
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
      status: 'In Progress',
      dueDate: 'Today',
      progress: 60,
      members: [
        'assets/images/profile.jpg',
        'assets/images/profile.jpg'
      ]
    },
    {
      id: 2,
      title: 'Landing Page Design',
      description: 'Complete dashboard UI.',
      priority: 'Medium',
      status: 'Completed',
      dueDate: 'Tomorrow',
      progress: 100,
      members: [
        'images/profile.jpg',
        'images/profile.jpg',
        'images/profile.jpg'
      ]
    },
    {
      id: 3,
      title: 'Meeting with Client',
      description: 'Discuss project scope.',
      priority: 'Low',
      status: 'Pending',
      dueDate: 'Friday',
      progress: 0,
      members: [
        'images/profile.jpg'
      ],
      image: '/images/img1.png'
    }
  ]);

  readonly tasks = this._tasks.asReadonly();

  completedTasks = computed(() => this.tasks().filter(task => task.status === 'Completed').length);

  inProgressTasks = computed(() => this.tasks().filter(task => task.status === 'In Progress').length);

  pendingTasks = computed(() => this.tasks().filter(task => task.status === 'Pending').length);

  overallProgress = computed(() => {
    const tasks = this.tasks();
    if (tasks.length === 0) {
      return 0;
    }
    const totalProgress = tasks.reduce((sum, task) => sum + task.progress, 0);
    return Math.round(totalProgress / tasks.length);
  });

  getTaskById(id: number): Task | undefined {
    return this.tasks().find(task => task.id === id);
  }

}
