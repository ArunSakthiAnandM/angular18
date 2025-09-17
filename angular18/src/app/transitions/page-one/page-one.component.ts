import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-one',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page page-one">
      <h2>Page One</h2>
      <p>
        This is the first page. Click the button to transition to the second
        page.
      </p>
      <button routerLink="/page-two">Go to Page Two</button>
    </div>
  `,
  styles: [
    `
      .page-one {
        background-color: #e3f2fd;
      }

      .page {
        min-height: 300px;
        padding: 20px;
        border-radius: 8px;
        text-align: center;

        @media (prefers-reduced-motion: no-preference) {
          view-transition-name: page-content;
        }
      }

      button {
        background-color: #1976d2;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;

        &:hover {
          background-color: #1565c0;
        }
      }
    `,
  ],
})
export class PageOneComponent {}
