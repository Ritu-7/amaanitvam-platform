# Route Registry

This document lists all active routing endpoints registered in the client-side router, detailing their operational purpose, access levels, and backend integration requirements.

---

## Document Metadata
* **Owner**: Architecture Team
* **Maintainer**: Frontend Team
* **Reviewer**: Lead Project Coordinator
* **Last Updated**: June 4, 2026
* **Dependencies**: [docs/architecture/frontend-architecture.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/architecture/frontend-architecture.md)

---

## 1. Route Registry Matrix

All virtual routes are resolved client-side via the browser's History API (`pushState`). Server fallbacks must redirect virtual directories to `index.html` (see [Deployment & Startup Guide](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/deployment/deployment-guide.md)).

| Route Path | Target Page Class | Purpose & Description | Auth Guard Scope | Backend Data Required |
| :--- | :--- | :--- | :--- | :--- |
| `/` | `HomePage` | Strategic entry point detailing trust metrics, values, and progression. | Public | Yes (Foundation Stats) |
| `/about` | `AboutPage` | Origin timeline, pillars, values, and milestone progression. | Public | No (Static Content) |
| `/programs` | `ProgramsPage` | Explains Manthan, Shiksha, and Pravah programs. | Public | No (Static Content) |
| `/impact` | `ImpactPage` | Showcases metrics, media update gallery, and field reports. | Public | Yes (Impact & Gallery) |
| `/events` | `EventsPage` | Listing upcoming community actions and coordination schedules. | Public | Yes (Active Events) |
| `/internships` | `InternshipsPage` | Directory of operational tracks and open internship positions. | Public | Yes (Active Roles) |
| `/volunteer` | `VolunteerPortal` | Explains volunteering pathways and displays application forms. | Public | No (Form POST only) |
| `/volunteer/dashboard` | `VolunteerDashboard` | Console tracking active volunteer hours, project tasks, and credentials. | Volunteer Scope | Yes (Profile & Tasks) |
| `/verify-certificate` | `CertificateVerificationPage`| Registry checking vault verifying signature tracking IDs. | Public | Yes (Certificate Registry)|
| `/contact` | `ContactPage` | Inquiry forms routing to support teams by priority. | Public | No (Form POST only) |
| `/donate` | `DonatePage` | Gateway detailing calculator and payment instructions. | Public | No (Receipt POST only) |
| `/admin` | `AdminDashboardPage` | Executive CRM overview tracking People, Projects, SLAs, and Logs. | Admin Scope | Yes (Consolidated CRM Data)|

---

## 2. Dynamic Parameter Routes

The router dynamically captures parameters represented as segments after base paths:

### 2.1 Events Parameterized Path
* **`/events/view/:slug`**: Resolves to `EventDetailsPage`. Captures the target event slug to retrieve active registrations, maps coordinates, and displays attendance sheets.
* **`/events/:slug`**: Resolves to `EventReportPage`. Loads published reports of concluded campaigns.

### 2.2 Internship Parameterized Paths
* **`/internships/domain/:id`**: Resolves to `DomainDetailsPage`. Fetches domain details (e.g. Technology, Education) to list prerequisites, tasks, and available roles.
* **`/internships/opportunity/:id`**: Resolves to `InternshipOpportunityPage`. Loads a specific open role to let visitors apply.

### 2.3 Relational Profile Detail Path
* **`/admin/people/:id`**: Resolves to `AdminPersonProfilePage`. Captures a unified Person ID (e.g. `peo-arjun-mehta`) and displays a 360-degree demographic log mapping volunteer hours, event attendances, certificates, and donations.

---

## 3. Redirection & Compatibility Controls

* **Hash-to-Path Redirection (Legacy Support)**: Traffic pointing to legacy hash routes (e.g. `#/about`) is automatically intercepted at startup and rewritten to `/about` via `window.history.replaceState` without a page refresh, ensuring old bookmarks and QR codes work.
* **Old Verification Path Redirection**: Traffic pointing to `/verify` is intercepted inside `main.js` and automatically rewritten to `/verify-certificate` to map to the canonical verify vault.
