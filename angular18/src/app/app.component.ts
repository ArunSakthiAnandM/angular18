import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular 18 Features Demo';
  private meta = inject(Meta);
  private titleService = inject(Title);

  constructor() {
    // Set meta tags for SEO (demonstrates SSR capabilities)
    this.titleService.setTitle(this.title);
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Explore Angular 18 features including control flow, signals, and view transitions',
      },
      {
        name: 'keywords',
        content: 'Angular 18, control flow, signals, view transitions, SSR',
      },
      { property: 'og:title', content: this.title },
      {
        property: 'og:description',
        content:
          'Explore Angular 18 features including control flow, signals, and view transitions',
      },
    ]);

    // Check for browser environment before accessing document
    if (typeof window !== 'undefined') {
      // Log view transitions support status
      const hasViewTransitions = 'startViewTransition' in document;
      console.log(
        hasViewTransitions
          ? 'View transitions are supported'
          : 'View transitions are not supported in this browser'
      );
    }
  }
}
