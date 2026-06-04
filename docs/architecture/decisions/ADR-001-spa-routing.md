# ADR-001: Custom Vanilla JS Single Page Application (SPA) Engine

## Status
Approved

## Context
Amaanitvam Foundation's platform operates in varied settings, including locations with low network bandwidth. The platform needs to support a wide range of devices (including older mobile viewports and tablets). 

Introducing heavy client frameworks (like React, Vue, or Angular) creates overhead:
1. **Bundle Overhead**: Framework runtimes add 50kB-150kB of compressed JS files, slowing down initial page loads.
2. **Compilation Complexity**: Runtimes require continuous updates, dependency syncs, and large node configurations.
3. **Onboarding Bar**: New student contributors must learn framework-specific state handling, lifecycle hooks, and CLI tools.

## Decision
We chose to build a lightweight, custom Single Page Application engine utilizing ES6 class structures and native browser DOM APIs:
* Every page orchestrator and UI element is structured as a class exporting a string-based template in its `render()` method, and binding event handlers in `init()`.
* The router acts as a simple coordinator listening to browser events, wiping the `#app` viewport container, inserting the raw HTML template, and executing page lifecycle setups sequentially.

## Consequences
* **Positives**:
  * **Ultra-Fast Performance**: Initial bundle loads in less than 500ms. Production build outputs are extremely lightweight.
  * **Zero Framework Bloat**: No virtual DOM overhead or runtime dependencies to update or patch.
  * **Low Entry Barrier**: Any developer with basic HTML, CSS, and ES6 Javascript knowledge can build components immediately.
* **Negatives**:
  * **Manual DOM Binding**: Event listeners and state-to-view updates must be managed manually in the `init()` phase.
  * **Template Injection**: String-based HTML templates do not benefit from built-in IDE syntax validation unless specific editor plugins are installed.
