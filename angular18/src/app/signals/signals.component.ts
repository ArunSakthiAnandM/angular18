import {
  Component,
  computed,
  effect,
  input,
  model,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  constructor() {
    effect(() => {
      console.log(`The current count is: ${this.count()}`);
    });
  }

  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  fun(): void {
    this.count.update((value) => value + 1);
  }

  name = input<string>();

  team = model('web');

  modelFun(): void {
    this.team.set('notif'); // model can be edited/reassigned
    // 'this.name' (input) cannot be edited
  }
}
