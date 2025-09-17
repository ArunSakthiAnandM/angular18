# Angular 18 Features Demo

This project demonstrates the latest features of Angular 18, including control flow blocks, signals, deferred views, and view transitions. It is organized as a showcase for learning and experimenting with Angular's new capabilities.

## Project Structure

- **angular18/**: Main Angular application folder
  - **src/app/**: Contains all feature demo components
  - **app.component.ts**: Root component, sets up meta tags and SSR features
  - **control-flow/**: Demonstrates new control flow blocks (`@if`, `@for`, `@switch`, etc.)
  - **deferred/**: Shows how to use `@defer` for lazy loading views based on triggers (viewport, interaction)
  - **first/**: Basic starter component
  - **signals/**: Demonstrates Angular Signals for reactive state management
  - **transitions/**: Contains `page-one` and `page-two` components to showcase view transitions

## Component Details

### AppComponent

Sets up the application shell, meta tags for SEO, and logs browser support for view transitions. Uses Angular's SSR capabilities.

### ControlFlowComponent

Demonstrates Angular 18's new control flow syntax:

- Conditional rendering with `@if`
- Iteration with `@for`
- Switch-case logic with `@switch`
- Dynamic toggling of item lists
- Example of a heavy operation for deferred loading

### DeferredComponent

Uses the `@defer` block to load content based on triggers:

- **on viewport**: Loads when scrolled into view
- **on interaction**: Loads after user interaction
- Includes placeholders, loading states, and error handling
- Improves performance by deferring heavy content

### FirstComponent

Basic starter component for demonstration purposes.

### SignalsComponent

Showcases Angular Signals:

- Basic, computed, object, and array signals
- Input and model signals for binding
- Effects for reactive side effects
- Methods to update signals and demonstrate reactivity

### PageOneComponent & PageTwoComponent (Transitions)

Demonstrate view transitions between pages:

- Uses `view-transition-name` for smooth animated transitions
- Navigation between pages using Angular Router

## How to Run

1. **Install dependencies:**
   ```bash
   cd angular18/angular18
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm start
   # or
   ng serve
   ```
3. **Open in browser:**
   Visit [http://localhost:4200](http://localhost:4200)

## Testing

Run unit tests with:

```bash
ng test
```

## Build

Build the project for production:

```bash
ng build
```

## Learn More

- [Angular 18 Documentation](https://angular.dev/)
- [Angular Signals](https://angular.dev/reference/signals)
- [Control Flow Blocks](https://angular.dev/reference/control-flow)
- [Deferred Views](https://angular.dev/reference/defer)
- [View Transitions](https://angular.dev/reference/view-transitions)
