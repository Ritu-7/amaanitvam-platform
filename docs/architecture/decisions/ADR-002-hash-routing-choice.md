# ADR-002: Upgrade to Path-Based Browser History Routing

## Status
Superseded (by Path-Based History Routing)

## Context
Originally, we chose hash-based routing (`#/about`) to support zero-configuration static hosting without server-side rewrite rules. 

However, as the Amaanitvam platform has evolved, search engine optimization (SEO), social media sharing previews (Open Graph metadata), clean URL aesthetics, and structured schema indexing (JSON-LD) have become core institutional requirements. Search engines and crawlers (such as Googlebot, LinkedIn, or Twitter previews) cannot parse or index content behind client-side hash identifiers cleanly.

## Decision
We decided to upgrade the client-side router to a path-based routing engine using the browser **History API** (`history.pushState` and `history.replaceState`). 

To address the deployment risks, we implemented a three-tier mitigation strategy:
1. **Server-Side Fallback Configurations**: Explicit rewrite rules are documented and added for Vercel (`vercel.json`), Netlify (`_redirects`), Nginx (`try_files`), and Apache (`.htaccess`) to fallback virtual paths to `index.html`.
2. **Phase 0 Compatibility Layer**: A redirection listener parses legacy hash URLs (e.g. `#/about`) at startup, cleanly transitioning them to `/about` without a full page refresh.
3. **Lazy Code Splitting**: Paths are mapped to dynamic component imports inside a centralized [routes.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/router/routes.js) configuration, enabling automatic asset chunking.

## Consequences
* **Positives**:
  * **Clean URLs**: Visible paths resemble native URLs (e.g. `/about`, `/volunteer/dashboard`), aligning with modern design quality.
  * **Dynamic SEO & OG Meta**: Route transitions dynamically inject specific page titles, meta descriptions, and OpenGraph images.
  * **Indexing Compatibility**: Standard crawler bots can index sitemaps and content layouts directly.
* **Negatives**:
  * **Deployment Dependency**: Deploying to production environments requires configuring index fallback rules, which has been mitigated by setting up verified configuration presets.
