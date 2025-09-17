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
  emptyItems: string[] = [];

  color = 'Red';

  // Heavy component that we'll load with @defer
  heavyOperation() {
    console.log('Heavy operation performed');
    return 'Heavy Operation Result';
  }

  // Toggle items array
  toggleItems() {
    if (this.items.length > 0) {
      this.emptyItems = [...this.items];
      this.items = [];
    } else {
      this.items = [...this.emptyItems];
      this.emptyItems = [];
    }
  }
}
