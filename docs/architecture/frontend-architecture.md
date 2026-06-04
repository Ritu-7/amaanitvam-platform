# Frontend Architecture Specification

This document details the client-side Single Page Application (SPA) architecture, custom routing mechanism, page orchestrators, component lifecycle, and state-management guidelines.

---

## Document Metadata
* **Owner**: Frontend Team
* **Maintainer**: Technical Lead
* **Reviewer**: Lead Developer
* **Last Updated**: June 4, 2026
* **Dependencies**: [docs/README.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/README.md), [docs/architecture/platform-overview.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/architecture/platform-overview.md)

---

## 1. SPA Architecture & History API Routing

The Amaanitvam platform is built as a custom Single Page Application using Vanilla ES6 Javascript. We deliberately avoid heavy framework runtimes (like React or Vue) to ensure near-zero overhead.

### 1.1 How the Router Works
The router is defined globally in [main.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/main.js) and intercepts anchor clicks to transition URLs via the HTML5 History API (`window.history.pushState`). It listens to the `popstate` and `DOMContentLoaded` events:
```javascript
window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', () => {
  resolveLegacyHashRoute();
  router();
});
```

### 1.2 Route Matching & Protection
Routes are registered centrally in [routes.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/router/routes.js). The router compiles path patterns (including dynamic tokens like `:slug` or `:id`) into regular expressions to resolve paths:
* **Redirects**: Legacy hash routes (e.g. `#/about`) are captured at startup and cleanly redirected to pathname URLs:
  ```javascript
  if (hash && hash.startsWith('#/')) {
    const cleanPath = hash.substring(1);
    window.history.replaceState(null, '', cleanPath);
  }
  ```
* **Authentication Guards**: Dynamic routes verify permissions depending on role scopes (Public, Volunteer, Intern, Admin). If unauthorized, they redirect using History state triggers.

### 1.3 Route-Based Code Splitting
To optimize performance, components are lazy-loaded on-demand using ES6 dynamic imports inside the router:
```javascript
const module = await matchedRoute.component();
const PageClass = module.default;
```
Vite automatically parses these dynamic imports during compilation, dividing pages into individual Javascript files (chunks) loaded only when a route is visited. This keeps the initial homepage asset bundle under **20 KB**.

### 1.4 Scroll Restoration & Smooth Anchors
* **Page Transitions**: Viewports automatically reset to the top when navigating:
  ```javascript
  if (previousPage !== newPageName) {
    window.scrollTo(0, 0);
  }
  ```
* **Sub-Section Anchors**: Clicking in-page anchors (e.g., `#challenge` or `#programs`) scrolls smoothly into view without triggering client-side transitions.

---

## 2. Component Design & Lifecycle

Every page and UI element is modeled as a class containing two core methods: `render()` and `init()`.

### 2.1 The Render-Init Contract
```javascript
export default class ComponentName {
  render() {
    // Returns a template literal containing the HTML structure
    return `
      <section class="py-36 bg-white">
        <h2 class="type-section-heading">Component Title</h2>
        <button id="btn-action" class="px-4 py-2 bg-pink-ruby text-white">Click Me</button>
      </section>
    `;
  }

  init() {
    // Executed AFTER the rendered HTML is injected into the DOM.
    // Use this to attach event listeners, trigger observers, or run counters.
    const btn = document.getElementById('btn-action');
    if (btn) {
      btn.addEventListener('click', () => console.log('Action triggered'));
    }
  }
}
```

---

## 3. Mock Data Architecture

To simulate a database environment before backend integration, mock databases reside under `src/mocks/`.
* **Mocks Registry**: Registry scripts export structured arrays (e.g., `people.js`, `projects.js`, `certificates.js`).
* **Inter-Entity Relationships**: Entity schemas use relational IDs to model cross-module operations.

---

## 4. State Handling & Client Caching

Dynamic user inputs, form submissions, and authentication variables are cached using:
* **`sessionStorage`**: Stores non-persistent operational states.
* **`localStorage`**: Stores persistent variables (such as active login states like `amaanitvam_volunteer_logged_in`).

---

## 5. Navigation Configurations

Global links and lists are managed in [navigation.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/constants/navigation.js). This ensures that updating a route path mapping is completed in a single file and propagated automatically to the `Navbar` and `Footer` renders.
* **Rule**: Developers must import the `PATHS` configuration rather than writing hardcoded route strings.
