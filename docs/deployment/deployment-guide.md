# Deployment & Local Startup Guide

This document details the environment configuration, local development workflows, bundling configurations, and production release procedures for the Amaanitvam Foundation Platform.

---

## Document Metadata
* **Owner**: DevOps & Operations Team
* **Maintainer**: Systems Administrator / Frontend Lead
* **Reviewer**: Lead Architect
* **Last Updated**: June 4, 2026
* **Dependencies**: [docs/README.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/README.md), [docs/architecture/frontend-architecture.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/architecture/frontend-architecture.md)

---

## 1. Prerequisites & Environment Setup

Ensure the host environment is equipped with the following dependencies before proceeding:

* **Node.js**: Version `18.0.0` or higher (recommended: LTS v20.x).
* **Package Manager**: npm Version `9.0.0` or higher.
* **Modern Web Browser**: Google Chrome, Mozilla Firefox, or Safari for verifying layouts.

To verify local installations, run:
```bash
node -v
npm -v
```

---

## 2. Local Development Guide

Follow these steps to run a local development workspace:

1. **Clone the Repository** and navigate into the frontend module:
   ```bash
   git clone <repository-url>
   cd amaanitvam-platform/frontend
   ```

2. **Install Project Dependencies**:
   ```bash
   npm install
   ```
   *Note: This downloads packages defined in [package.json](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/package.json) (Vite, TailwindCSS, and the `@tailwindcss/vite` compiler plugin) into `node_modules/`.*

3. **Start the Vite Development Server**:
   ```bash
   npm run dev
   ```
   * The terminal will output the local network URL (typically `http://localhost:5173/`).
   * The server runs with **Hot Module Replacement (HMR)** enabled—edits to JS files, CSS layouts, or content configurations will instantly refresh on the active browser tab.

---

## 3. Production Bundling & Preview

Before deployment to staging or production, generate a static optimized build to ensure asset integrity:

1. **Compile Production Assets**:
   ```bash
   npm run build
   ```
   * This command runs `vite build`, executing the following build pipeline steps:
     - Feeds `src/style.css` to the `@tailwindcss/vite` plugin to parse theme tokens.
     - Bundles all ES6 import modules into single, minified, hash-appended Javascript and CSS outputs.
     - Moves assets from the `public/` directory directly to the output folder.
     - Compiles the bundle into [frontend/dist/](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/dist/).

2. **Preview the Compiled Production Output**:
   ```bash
   npm run preview
   ```
   * This serves the contents of the `dist/` directory locally (typically on `http://localhost:4173/`).
   * **Crucial Step**: Always test the built application via `npm run preview` to verify that there are no routing discrepancies, broken module imports, or layout failures due to bundler minification rules.

---

## 4. Vite Configuration Details

The project utilizes Vite v8 and Tailwind CSS v4.0 for asset handling. The config file is:

### [vite.config.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/vite.config.js)
```javascript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

- `@tailwindcss/vite`: The official integration plugin. It enables compiling CSS variables, custom utilities, and @apply directives inside [src/style.css](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/style.css) directly during compilation without needing an external post-processing daemon (like PostCSS).

---

## 5. Pre-Deployment Integrity Check

Before pushing code changes to main or triggering CI/CD deploy hooks, verify:

- [ ] **No Console Errors**: The client-side dashboard loads cleanly without warnings or errors in the DevTools console.
- [ ] **Build Validation**: The `npm run build` command finishes without warning codes or Rollup compilation syntax blocks.
- [ ] **Routing Cleanliness**: Redirect logic handles legacy route requests (e.g. `#/verify` redirecting to `#/verify-certificate`) automatically.
- [ ] **Data Scope Integrity**: If mock tables were updated, verify that Arjun's simulated login filters return items without index overflows.
