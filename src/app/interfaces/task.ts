export interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: String;
  progress: number;
  members: string[];
  completed: boolean;
}
