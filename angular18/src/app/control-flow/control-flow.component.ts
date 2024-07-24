import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [NgIf],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss',
})
export class ControlFlowComponent {
  condition: Boolean = true;
  a: Number = 15;
  b: Number = 25;

  items = ['item1', 'item2', 'item3'];

  color = 'Red';
}
