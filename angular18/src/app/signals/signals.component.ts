import {
  Component,
  computed,
  effect,
  input,
  model,
  signal,
  untracked,
} from '@angular/core';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  // Basic Signal
  count = signal(0);

  // Computed Signal
  doubleCount = computed(() => this.count() * 2);

  // Object Signal
  user = signal<User>({ name: 'John', age: 30 });

  // Array Signal
  tasks = signal<string[]>(['Learn Angular 18', 'Master Signals']);

  // Input Signal (readonly)
  name = input<string>();

  // Model Signal (two-way binding)
  team = model('web');

  // Computed with multiple signals
  userInfo = computed(() => {
    return `${this.user().name} from team ${this.team()}`;
  });

  constructor() {
    // Effect to track changes
    effect(() => {
      console.log(`Count changed to: ${this.count()}`);
      // Using untracked to read a signal without creating a dependency
      const currentTeam = untracked(() => this.team());
      console.log(`Current team (untracked): ${currentTeam}`);
    });
  }

  // Signal update methods
  increment(): void {
    this.count.update((value) => value + 1);
  }

  // Update object signal
  updateUser(): void {
    this.user.update((user) => ({
      ...user,
      age: user.age + 1,
    }));
  }

  // Update array signal
  addTask(task: string): void {
    this.tasks.update((tasks) => [...tasks, task]);
  }

  removeTask(index: number): void {
    this.tasks.update((tasks) => tasks.filter((_, i) => i !== index));
  }

  // Model signal update
  updateTeam(): void {
    this.team.set(this.team() === 'web' ? 'mobile' : 'web');
  }
}
