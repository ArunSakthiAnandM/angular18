import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { SignalsComponent } from './signals/signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FirstComponent,
    ControlFlowComponent,
    SignalsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    setTimeout(() => {
      this.userName = 'A' + this.userName;
    }, 2000);
  }
  title = 'angular18';
  userName = 'Arun';
}
