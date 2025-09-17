import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-two',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page page-two">
      <h2>Page Two</h2>
      <p>
        This is the second page. Click the button to transition back to the
        first page.
      </p>
      <button routerLink="/page-one">Go to Page One</button>
    </div>
  `,
  styles: [
    `
      .page-two {
        background-color: #f3e5f5;
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
        background-color: #7b1fa2;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;

        &:hover {
          background-color: #6a1b9a;
        }
      }
    `,
  ],
})
export class PageTwoComponent {}
