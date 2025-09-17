import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HeavyComponent {
  title: string;
  description: string;
}

@Component({
  selector: 'app-deferred',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="deferred-demo">
      <h2>Deferrable Views Example</h2>

      <div class="sections">
        <!-- Immediate Loading -->
        <section class="demo-section">
          <h3>Regular Content</h3>
          <p>This content loads immediately with the page.</p>
        </section>

        <!-- Deferred on Viewport -->
        @defer (on viewport) {
        <section class="demo-section">
          <h3>Viewport Triggered Content</h3>
          <p>This content loaded when it entered the viewport.</p>
          <div class="heavy-content">
            @for(item of heavyContent; track item) {
            <div class="content-card">
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </div>
            }
          </div>
        </section>
        } @placeholder {
        <section class="demo-section loading">
          <p>Scroll down to load content...</p>
        </section>
        } @loading (minimum 1s) {
        <section class="demo-section loading">
          <h3>Loading Content...</h3>
          <div class="loading-animation"></div>
        </section>
        } @error {
        <section class="demo-section error">
          <h3>Error Loading Content</h3>
          <p>There was an error loading the deferred content.</p>
        </section>
        }

        <!-- Deferred on Interaction -->
        @defer (on interaction) {
        <section class="demo-section interactive">
          <h3>Interaction Triggered Content</h3>
          <p>This content loaded after user interaction.</p>
        </section>
        } @placeholder {
        <section class="demo-section placeholder">
          <h3>Click or interact with this section</h3>
          <p>Content will load after interaction</p>
        </section>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .deferred-demo {
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
      }

      .sections {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .demo-section {
        background: white;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;

        &:hover {
          transform: translateY(-2px);
        }

        &.loading {
          background: #f5f5f5;

          .loading-animation {
            height: 200px;
            background: linear-gradient(
              90deg,
              #f0f0f0 25%,
              #f8f8f8 50%,
              #f0f0f0 75%
            );
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
            border-radius: 4px;
          }
        }

        &.error {
          background: #ffebee;
          border: 1px solid #ffcdd2;
        }

        &.placeholder {
          border: 2px dashed #e0e0e0;
          cursor: pointer;
          text-align: center;

          &:hover {
            border-color: #2196f3;
          }
        }
      }

      .heavy-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
        margin-top: 16px;
      }

      .content-card {
        background: #f5f5f5;
        padding: 16px;
        border-radius: 4px;

        h4 {
          margin: 0 0 8px 0;
          color: #333;
        }

        p {
          margin: 0;
          color: #666;
        }
      }

      @keyframes loading {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }
    `,
  ],
})
export class DeferredComponent {
  heavyContent: HeavyComponent[] = [
    {
      title: 'Deferred Content 1',
      description:
        'This content was loaded when the component entered the viewport.',
    },
    {
      title: 'Deferred Content 2',
      description: 'Using @defer helps improve initial page load performance.',
    },
    {
      title: 'Deferred Content 3',
      description: 'Content can be deferred based on various triggers.',
    },
  ];
}
