import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar';
import { Header } from './components/header/header';
import { Dashboard } from './components/dashboard/dashboard'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, Header, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo');
}
