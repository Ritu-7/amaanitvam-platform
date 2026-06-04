# Amaanitvam Platform: Final Technical Handover Document

This document serves as the authoritative engineering handover reference for the Amaanitvam Foundation Platform. It outlines the project's vision, system architecture, codebase layout, implemented modules, backend blueprints, development workflows, infrastructure state, and operational roadmap.

---

## SECTION 1: PROJECT OVERVIEW

### 1.1 Purpose of Amaanitvam Platform
The Amaanitvam Platform is a unified web application and operational CRM/ERP ecosystem designed for the Amaanitvam Foundation, a student-led movement focused on community action, learning, and education. The platform manages public-facing information, volunteer recruitment and tracking, internship coordination, event operations, verifiable certification lookup, donor management, and administrative services in a single system.

### 1.2 Public-Facing Objectives
* **Public Information Portal**: Educate the public on the foundation's core initiatives (Project Manthan, Project Shiksha, Project Pravah), field timelines, values, and organizational impact.
* **Onboarding Portals**: Streamline pathways for prospective volunteers and interns to browse openings, review prerequisites, and submit applications.
* **Certificate Verification Vault**: Allow academic institutions, corporate recruiters, and third-party verifiers to instantly audit and verify issued student credentials via tracking codes and QR-based targets.
* **Public Engagement & Donations**: Facilitate inquiries, program signups, and community donations through interactive calculators mapping funds directly to operational metrics.

### 1.3 Internal Operations Objectives (Administrative Operations Center)
* **Unified CRM Registry**: Centralize record tracking for volunteers, interns, alumni, and donors in a relational People Directory.
* **Internship Screenings**: Provide Kanban boards to screen applicants, assign cohort cycles, monitor project tasks, and record evaluations.
* **Events & Roster Registry**: Orchestrate local drives, manage signup registries, and coordinate check-in registries separate from event rosters.
* **Certificate Ledger**: Manage the creation, signature verification, and issuance of digital credentials.
* **Traceability Audit Trail**: Log administrative overrides, financial ledger entries, and status changes for full security auditing.

---

## SECTION 2: TECHNOLOGY STACK

### 2.1 Frontend Core Stack
* **Language**: Vanilla ES6+ JavaScript. We deliberately skip large client-side frameworks (such as React, Angular, or Vue) to achieve zero runtime overhead, rapid startup, and compile-free rendering speeds.
* **Styling**: Vanilla CSS utilizing Tailwind CSS v4.0 for utility tokens, fluid layouts, and color variables.
* **Template Engine**: ES6 Template Literals. HTML structures are built dynamically inside the class-based components and rendered into the DOM on routing events.

### 2.2 Build System
* **Bundler**: Vite v8.x. Vite handles the dev-server setup, Hot Module Replacement (HMR), tree-shaking, and Rollup-based production chunking.
* **Tailwind CSS Plugin**: `@tailwindcss/vite` compiles styles directly during the build phase without requiring separate build-daemons or PostCSS setups.

### 2.3 Routing System
* **Engine**: Custom History API Router implemented in [main.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/main.js). It intercepts local anchor tags, prevents standard page reloads, pushes clean pathname changes to the browser history, and lazy-loads route-specific JavaScript files (chunks) on demand.
* **Redirection Handlers**: Integrates startup checks to rewrite legacy hash routes (e.g., `#/about` redirects to `/about`) to support older bookmarks and QR targets.
* **Route Guards**: Dynamic client-side checks screen roles (Public, Volunteer, Intern, Admin) using localStorage/sessionStorage.

### 2.4 State Management Strategy
* **Volatile Session Caching**: `sessionStorage` manages active user profile details, temporary administrative filter choices, and mock login sessions.
* **Persistent Session Caching**: `localStorage` retains volunteer/intern logged-in indicators and local tracking parameters.
* **Mock Database Registry**: Centralized mock database exports inside `src/mocks/` model relational database tables.

### 2.5 Styling Approach
* **HSL Color Palette**: Uses tailored HSL color tokens defined inside Tailwind's theme layer (e.g., `pink-ruby`, `pink-blush`, `gold-satin`, `text-dark`, `text-muted`).
* **Fluid Layouts**: The UI relies on percentage flexbox, grid systems, and responsive viewport sizing to avoid hardcoded absolute heights and pixel widths.

### 2.6 Current Deployment Status
* The frontend is compiled into a static artifact set (`dist/` directory) that can be served from any static hosting environment (e.g., Netlify, Vercel, Nginx, or AWS S3).
* Deployment routing rewrite rules must map all virtual directories (e.g., `/about`, `/volunteer/dashboard`) back to `index.html` to avoid HTTP 404 errors on page reloads (see [Deployment & Startup Guide](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/deployment/deployment-guide.md)).

---

## SECTION 3: REPOSITORY STRUCTURE

```text
amaanitvam-platform/
├── backend/                  <-- Future Backend API Service (Stubs/Stale)
├── docs/                     <-- Core System Documentation Registry
│   ├── api/                  <-- API Request/Response JSON Schemas
│   ├── architecture/         <-- High-level system design plans & Route Registries
│   │   └── decisions/        <-- Architecture Decision Records (ADRs 001 - 005)
│   ├── deployment/           <-- Environment variables & Deploy configurations
│   ├── frontend/             <-- Component Guides & Mobile Responsiveness audits
│   ├── handbook/             <-- Operational manual for non-technical coordinators
│   └── handover/             <-- Handover documentation (This file)
└── frontend/                 <-- Main Frontend Web Application (Active)
    ├── dist/                 <-- Compiled Production Bundles (Generated by Vite)
    ├── public/               <-- Static Assets (Logo images, background SVGs)
    ├── src/                  <-- Source Code Directory
    │   ├── components/       <-- Modular UI Layout Blocks
    │   │   ├── admin/        <-- Admin Dashboards, Login, & CRM widgets
    │   │   ├── certificates/ <-- QR verification screens & credential frames
    │   │   ├── contact/      <-- Contact form handlers & inquiry cards
    │   │   ├── events/       <-- Event listing cards, registrars & checks-ins
    │   │   ├── internships/  <-- Opportunity grids & job details components
    │   │   ├── volunteer/    <-- Volunteer onboarding and workspace components
    │   │   └── shared/       <-- Global common components (Navbar.js, Footer.js)
    │   ├── constants/        <-- Navigation configuration links (navigation.js)
    │   ├── content/          <-- Static page text details & copy configurations
    │   ├── mocks/            <-- In-memory relational database sheets
    │   │   └── admin/        <-- Admin relational dataset configurations
    │   ├── pages/            <-- Top-level Page Orchestrators (Route targets)
    │   ├── router/           <-- SPA Route definition manifests (routes.js)
    │   ├── services/         <-- Analytics log tracking utilities
    │   ├── utils/            <-- Data formatters, icon libraries & mapping helpers
    │   ├── main.js           <-- Global Routing Engine & Entrypoint
    │   └── style.css         <-- Global CSS definitions & theme variables
    ├── index.html            <-- Main Single Page Document Target
    ├── package.json          <-- Node package configurations
    ├── vercel.json           <-- Vercel deployment rewriting configurations
    └── vite.config.js        <-- Vite compiler compilation parameters
```

---

## SECTION 4: IMPLEMENTED MODULES

### 4.1 Homepage
* **Purpose**: Primary entry point introducing the foundation's vision, core metrics, and opportunities.
* **Implemented Features**: Narrative overview, trust statistics, student beginning callout, programs snapshot, and the certificate verification widget.
* **Frontend Status**: Complete. Fully responsive grid layouts.
* **Backend Dependency**: Requires endpoints for dynamic trust metrics (`GET /api/metrics/summary`).
* **Limitations**: Current landing stats are read from static mock content files.

### 4.2 About Page
* **Purpose**: Document the history, student-led origin, and values of the foundation.
* **Implemented Features**: Story timeline, mission statements, vertical pillars, and programmatic flowchart.
* **Frontend Status**: Complete. Uses scroll-reveal transitions.
* **Backend Dependency**: None. Content is static.

### 4.3 Programs Page
* **Purpose**: Outline the operational specifics of the three core projects.
* **Implemented Features**: Project Manthan (remedial classroom metrics), Project Shiksha (school access and library drives), and Project Pravah (health and environment camps).
* **Frontend Status**: Complete. CTA paths smoothly target specific details.
* **Backend Dependency**: None. Relies on structured content configurations.

### 4.4 Impact Page
* **Purpose**: Display verified field outputs, campaign logs, and field narratives.
* **Implemented Features**: Operational metrics board, story cards list, and a dynamic field media gallery.
* **Frontend Status**: Complete. Grid layouts adapt cleanly across viewports.
* **Backend Dependency**: Requires CRUD endpoints for gallery assets and field narrative stories (`GET /api/impact/stories`).

### 4.5 Volunteer Portal
* **Purpose**: Manage volunteer onboarding and showcase opportunities.
* **Implemented Features**: Pathway cards, active contributions overview, and a volunteer application form.
* **Frontend Status**: Complete. Form inputs validate and cache inputs in memory.
* **Backend Dependency**: Requires POST endpoint to register volunteer submissions (`POST /api/volunteer/applications`).

### 4.6 Volunteer Workspace & Dashboard
* **Purpose**: Personal dashboard for approved volunteers.
* **Implemented Features**: Profile information manager, task checklists, campaign team directory, contribution timeline, and attendance history logs.
* **Frontend Status**: Complete. Protected by authentication route guards.
* **Backend Dependency**: Requires endpoints for volunteer workspace profiles and tasks (`GET /api/volunteer/profile`, `GET /api/volunteer/tasks`, `GET /api/volunteer/attendance`).

### 4.7 Internship Platform
* **Purpose**: Browse and apply for technical/creative specialization streams.
* **Implemented Features**: Domain specializations list (Web Dev, UI/UX, Graphic Design, Social Research, Campaign Marketing), detailed domain pages, opportunity application forms, and application status checkers.
* **Frontend Status**: Complete. Specialization pages dynamically pull open roles.
* **Backend Dependency**: Requires endpoints for active roles and application submissions (`GET /api/internships`, `POST /api/internships/apply`, `GET /api/internships/status?email=...`).

### 4.8 Events Platform
* **Purpose**: Display community events and process visitor registrations.
* **Implemented Features**: Calendar listing, event detail pages, registration forms, and registration status checker.
* **Frontend Status**: Complete. Active lists filter events based on date ranges.
* **Backend Dependency**: Requires endpoints for event details and registrations (`GET /api/events`, `POST /api/events/:id/register`).

### 4.9 Certificate System
* **Purpose**: Verify issued credentials.
* **Implemented Features**: Search input matching credential IDs, detail rendering showing recipient name, track name, date of issue, and signed verified status indicators.
* **Frontend Status**: Complete. Verified certificate routes are fully public.
* **Backend Dependency**: Requires verify registry API (`GET /api/certificates/verify/:id`).

### 4.10 Contact Platform
* **Purpose**: Route user inquiries.
* **Implemented Features**: Categorized inquiry forms with contact details.
* **Frontend Status**: Complete. Forms validate inputs before submission.
* **Backend Dependency**: Requires inquiry route logger (`POST /api/inquiries`).

### 4.11 Donate Platform
* **Purpose**: Secure donor portal.
* **Implemented Features**: Custom calculator mapping donations to specific outcomes (e.g., student books, classroom rent), donor detail forms, and mock bank transfer checksheets.
* **Frontend Status**: Complete. Calculators dynamically scale inputs.
* **Backend Dependency**: Requires integration with Stripe/Razorpay API endpoints (`POST /api/donations/checkout`).

### 4.12 Admin Operations Center
* **Purpose**: Centralized operations dashboard for foundation coordinators.
* **Implemented Features**: Executive analytics overview, People directory, Volunteer metrics desk, Internship Kanban screen, Event coordinator desk, Certificate registry queue, Partnership coordinator table, SLA inquiry ticketing, system tracing log, and client diagnostics widgets.
* **Frontend Status**: Complete. Protected by Admin authentication guards.
* **Backend Dependency**: Critical. Requires a complete suite of admin management APIs (see Section 5).

---

## SECTION 5: ADMIN PLATFORM STATUS

The Admin Platform acts as a secure control desk for managing the foundation's operations. Access is restricted using a mock session token guard (`sessionStorage.getItem('amaanitvam_admin_session')`) that requires a role and an active session.

### 5.1 Admin Dashboard Pages & Route Map
* **`/admin/login`**: Renders the administrative login page. Displays a **Development Testing Access** dashboard help panel summarizing credentials for roles (Coordinator, Volunteer Lead, Internship Coordinator, Certificate Manager, Finance Manager, Events Coordinator) with default password `demo123`.
* **`/admin`**: Executive control board showing consolidated metrics: Total Volunteers, Active Internships, Pending Inquiries, and Funding Intent ratios.
* **`/admin/search`**: Global search indexing the People database.
* **`/admin/people`**: The core directory of all volunteers, interns, alumni, and donors. Supports assignment of cohort cycles, status toggling, and data exporting.
* **`/admin/people/:id`**: Profile page showing a 360-degree participant history registry mapping volunteer hours, event attendance, certificates, and donations.
* **`/admin/volunteers`**: Volunteer desk tracking service hours and engagement tiers.
* **`/admin/internships`**: Kanban board showing candidates from New Applications to Screened, Interviewed, Accepted, and Rejected stages.
* **`/admin/projects`**: Project tracker assigning cohort groups to specific campaign tasks.
* **`/admin/certificates`**: Certification queue showing Pending requests, Approved certifications, and Issued digital credentials.
* **`/admin/events`**: Event desk showing rosters, attendance trackers, and check-in panels.
* **`/admin/donations`**: Donations ledger categorizing payments by HSL intents.
* **`/admin/partnerships`**: Partnership coordinator table tracking corporate and academic alliances.
* **`/admin/inquiries`**: Inquiry manager tracking support tickets and SLAs.
* **`/admin/audit-logs`**: Tracing log showing administrative modifications.
* **`/admin/system-health`**: Client diagnostics panel displaying browser metrics.

---

## SECTION 6: DOCUMENTATION INVENTORY

| Document Name | Location | Purpose | Owner | Status |
| :--- | :--- | :--- | :--- | :--- |
| **README.md** | [README.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/README.md) | High-level overview, install guides, and script commands. | Technical Coordinator | **Active** |
| **CONTRIBUTING.md** | [CONTRIBUTING.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/CONTRIBUTING.md) | Coding guidelines, branch nomenclature, and PR rules. | Technical Lead | **Active** |
| **Platform Overview** | [platform-overview.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/architecture/platform-overview.md) | Map of modules, database overview, and roadmap. | Architecture Team | **Active** |
| **Frontend Architecture** | [frontend-architecture.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/architecture/frontend-architecture.md) | Custom SPA lifecycle, rendering engine, and styling guides. | Frontend Team | **Active** |
| **Backend Integration Blueprint** | [backend-integration-blueprint.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/architecture/backend-integration-blueprint.md) | Data schemas, API specifications, and storage options. | Backend Team | **Active** |
| **Route Registry** | [routes.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/architecture/routes.md) | Map of frontend URLs and access controls. | Architecture Team | **Active** |
| **Documentation Map** | [documentation-map.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/documentation-map.md) | Index linking all documents in the repository. | Technical Core | **Active** |
| **Module Registry** | [module-registry.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/frontend/module-registry.md) | Table tracking development status of modules. | Frontend Lead | **Active** |
| **Volunteer Platform Guide** | [volunteer-platform.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/frontend/volunteer-platform.md) | Operational guidelines for the volunteer dashboard. | Dev Team | **Active** |
| **Admin Authentication Guide** | [admin-authentication.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/frontend/admin-authentication.md) | Overview of mock sessions, roles, and security guards. | Technical Lead | **Active** |
| **Mobile Responsiveness Report** | [mobile-responsiveness-report.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/frontend/mobile-responsiveness-report.md) | Layout stacking details, viewport sizes, and table testing. | Frontend Lead | **Active** |
| **Deployment Guide** | [deployment-guide.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/deployment/deployment-guide.md) | Environment configuration and static hosting rewrites. | DevOps Lead | **Active** |

---

## SECTION 7: BACKEND IMPLEMENTATION BLUEPRINT

To fully migrate the frontend from mock datasets to a production backend, the following backend architecture must be implemented (cross-referenced from the [Backend Integration Blueprint](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/architecture/backend-integration-blueprint.md)).

### 7.1 Authentication & Authorization
* **JWT-Based Authentication**: Implement stateless token authentication. When the client sends credentials to `POST /api/auth/login`, generate and return a signed JSON Web Token containing the user's role and ID.
* **Role-Based Access Control (RBAC)**: Enforce access guards in the backend based on roles:
  - `Admin`: Full operations control.
  - `CertManager`: Restricted to creating and issuing certificates.
  - `Volunteer`: Access to personal dashboards.
  - `Intern`: Access to personal workspaces.

### 7.2 Relational Database Schema
The database schema should mirror the structure of the mock datasets:
* **`People` Table**: Manage profile records. Fields: `id`, `name`, `email`, `phone`, `type` (enum: Volunteer, Intern, Alumni, Donor), `status` (enum: Pending, Active, Completed), `growth_tier` (enum: New Contributor, Active Contributor, Lead Volunteer).
* **`Certificates` Table**: Track credentials. Fields: `id`, `recipient_id` (FK), `type` (enum), `status` (enum: Pending, Approved, Issued), `issue_date`, `hash_signature` (SHA-256 integrity hash).
* **`Applications` Table**: Track submissions. Fields: `id`, `applicant_id` (FK), `domain` (enum), `status` (enum: Applied, Screened, Interview, Accepted, Rejected), `notes`.
* **`Events` & `Registrations` Tables**: Track signups and attendance status (enum: Present, Absent, Excused).
* **`Donations` Table**: Log payments. Fields: `id`, `donor_id` (FK), `amount`, `currency`, `intent` (enum: Books, Midday Meals, Infrastructure, Center Rent), `status`.

### 7.3 File Storage & CDNs
* **S3-Compatible Storage**: Used for resume uploads (restricted access) and public PDF certificates (public read).
* **Cloudinary / CDN**: Serve optimized event gallery images.

### 7.4 Verification Architecture (QR Checks)
The public lookup page `/verify-certificate` queries `GET /api/certificates/verify/:id`. The backend checks the certificate ID against the database, validates the tracking code, and returns the verification details. If a QR code is scanned, it routes to `<domain>/verify-certificate?id=<credential-id>` to automatically query the status.

---

## SECTION 8: KNOWN LIMITATIONS

The current implementation is a high-fidelity frontend prototype. It has the following known limitations:

1. **In-Memory Caching**: Reloading the page resets some temporary mock updates, as changes are saved in memory rather than a database.
2. **Session Mock Authentication**: Security guards verify sessions using key-value checks inside `sessionStorage`. This is not a substitute for JWT verification.
3. **No File Upload Integration**: File selectors (resumes, event photos) process filenames locally but do not upload files to a server.
4. **No Real Payment Gateways**: The donation portal uses a mock payment simulation instead of live Stripe or Razorpay endpoints.
5. **Mock Email Alerts**: Sending alerts (for certificates or event rosters) triggers alert windows but does not send actual emails.
6. **No Real User Accounts**: Registration flows write mock objects directly to memory without database serialization.
7. **No Server-Side Analytics**: Dashboard charts pull metrics from static data files.

---

## SECTION 9: RECOMMENDED NEXT STEPS

The development roadmap is organized into the following priority order:

### P0: Critical Backend Architecture (Phase 1 Backend)
* Choose a backend technology (e.g., Node.js/Express, Python/FastAPI, or Go) and initialize the server workspace.
* Set up a PostgreSQL/MySQL database and run database migrations using the schema blueprint.

### P1: JWT Authentication & Registration
* Migrate mock login sessions to use REST API endpoints (`POST /api/auth/login`).
* Replace client-side routing guards with JWT token verification.

### P2: Unified People Database
* Build the people directory API (`GET /api/admin/people`).
* Bind the volunteer dashboard and intern workspace to fetch user profiles dynamically from the database.

### P3: Certificate Signature & Vault
* Implement PDF certificate generation on the server.
* Generate a SHA-256 signature hash for each certificate and store it in the database for verification.

### P4: Events Coordinator Desk
* Implement event registration APIs and database models.
* Replace the mock roster checklists with real attendance endpoints.

### P5: Automated Notification Services
* Set up an email service (using Nodemailer, SendGrid, or AWS SES) to send automated transactional emails when applications are approved or certificates are issued.

### P6: Production Deployment
* Set up CI/CD pipelines (e.g., GitHub Actions) to automatically build and deploy the frontend to static hosting platforms and the backend to server hosting platforms.

---

## SECTION 10: CONTRIBUTOR ONBOARDING

To maintain code health and coordination, new developers must follow the guidelines in [CONTRIBUTING.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/CONTRIBUTING.md).

### 10.1 Branch Nomenclature
* **Features**: `feature/short-description` (e.g., `feature/qr-scanner-widget`).
* **Fixes**: `bugfix/short-description` (e.g., `bugfix/navbar-scroll-lock`).
* **Docs**: `docs/short-description`.

### 10.2 Code Quality Standards
* **No Inline CSS**: Use Tailwind classes or utilities defined in `style.css`.
* **Zero Emojis**: Emojis are excluded from codebase variables, code strings, metadata, and documentation markdown.
* **Pure Utils**: Javascript utilities inside `src/utils/` must remain pure, side-effect-free, and not import components or pages.

### 10.3 Pre-Merge Checks
Before committing code, verify the following:
```bash
npm install
npm run build
npm run preview
```
Ensure there are no compilation warnings, console errors, or broken virtual paths.

---

## SECTION 11: INFRASTRUCTURE STATUS

* **GitHub Organization**: Stored under the foundation's official code organization.
* **Repository**: Contains two primary subfolders: `frontend/` (active SPA prototype) and `backend/` (placeholder API shell).
* **Domain Configuration**: The production DNS record must target the static host's nameservers.
* **Static Host Configuration**: Virtual pathname rewrites must be configured to point to `index.html` (e.g., using `vercel.json` or `.htaccess`).
* **Environment Variables**: The project does not currently require `.env` files. Once a backend is active, define `VITE_API_URL` to point to the API.

---

## SECTION 12: FINAL PROJECT STATUS ASSESSMENT

### 12.1 Operational Readiness Scorecard
The table below details an honest engineering assessment of the platform's current state:

| Category | Readiness Score | Status Description |
| :--- | :--- | :--- |
| **Frontend UI** | **95%** | Highly polished component architectures. Zero placeholders. Production-grade typography. |
| **System Documentation** | **90%** | Comprehensive guides, decision records, mappings, and deployment briefs are complete. |
| **Mobile Responsiveness** | **85%** | Fullscreen navigation drawer, grid stack overrides, and table wrappers completed. Requires real-device testing. |
| **Backend Integration** | **0%** | Relies entirely on relational mock datasets. No active endpoints. |
| **Deployment Setup** | **20%** | Production compiling verified. Requires configuration of webhooks and rewrite patterns. |
| **Security Controls** | **10%** | Client-side mock guards active. Relies on sessionStorage values. No cryptographic token systems. |
| **Production Ready** | **NO** | Blocks: Database integration, auth endpoints, gateway integrations, real SSL certificates. |

---

## SECTION 13: TAKEOVER GUIDE

If you are joining the Amaanitvam Platform as the new Technical Lead, follow this roadmap in your first week:

### 13.1 Critical Files New Developers Must Read
New contributors should review the following documentation in priority order before writing code:
1. **[docs/README.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/README.md)**: Workspace initialization and NPM commands.
2. **[CONTRIBUTING.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/CONTRIBUTING.md)**: Coding quality rules, branch patterns, and styling constraints.
3. **[Frontend Architecture Guide](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/architecture/frontend-architecture.md)**: Core rendering cycle, SPA routing engine, and component lifecycles.
4. **[Backend Integration Blueprint](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/architecture/backend-integration-blueprint.md)**: Entity database planning, expected REST API structure, and prioritization.
5. **[Final Technical Handover](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/handover/final-technical-handover.md)**: Current system overview and takeover guide (this document).

### 13.2 First Week Tasks
* Clone the repository, navigate to `frontend/`, run `npm install`, and start the local server with `npm run dev`.
* Log in as an administrator on `localhost:5173/admin/login` using the dev credentials listed on the login page.
* Browse the admin panels (People, Volunteer metrics, Kanban screening, Certificates) to understand the workflows.
* Run `npm run build` and preview the build locally using `npm run preview` to verify bundle compilation.

### 13.3 Guidelines on What to Modify and What to Avoid
* **Stable Zones (Do Not Rewrite)**:
  - **The Router Engine**: The routing logic in [main.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/main.js) is stable. Avoid changing it unless you are fixing a major routing bug.
  - **CSS Styling Tokens**: Tailwind CSS v4.0 theme variables are configured inside [style.css](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/style.css). Use utility classes rather than creating new custom CSS selectors.
* **Active Development Zones (High Priority Modifications)**:
  - **Backend API Integration**: Connect mock registries inside `src/mocks/` to live database endpoints.
  - **JWT Authorization**: Implement real token exchanges to replace the mock authentication session logic.

---

## SECTION 14: CURRENT BRANCH STATUS

The repository uses three primary development branches. Their status is documented below to prevent future confusion about unfinished work:

| Branch Name | Branch Purpose | Development Status | Merged to Main? | Safe to Delete? | Pending PRs |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `main` | Production-ready stable branch. Direct deploy target. | **Active & Compile Verified** | N/A | **NO** | None. |
| `feature/admin-platform` | Prototyping admin CRM, screens, and auth gates. | **Completed** | Yes | **YES** | None. All changes merged. |
| `feature/final-refinement` | Auditing mobile responsiveness, grids, tables, and overlays. | **Completed** | Yes | **YES** | None. All changes merged. |

---

## SECTION 15: ROUTE REGISTRY APPENDIX

This appendix lists all active paths registered in [routes.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/router/routes.js) along with their component classes, permission checks, and roles:

### 15.1 Public Routes Matrix
| Path | Component Class | Purpose and Description | Guard Scope |
| :--- | :--- | :--- | :--- |
| `/` | `HomePage` | Strategic landing page detailing metrics, values, and outcomes. | Public |
| `/about` | `AboutPage` | Student beginning history timeline, pillars, and growth. | Public |
| `/programs` | `ProgramsPage` | Program specifics of Manthan, Shiksha, and Pravah. | Public |
| `/impact` | `ImpactPage` | Displaying ground statistics, field stories, and gallery. | Public |
| `/events` | `EventsPage` | Calendar of active community actions and listings. | Public |
| `/events/view/:slug` | `EventDetailsPage` | Dynamic page for single event registrations. | Public |
| `/events/:slug` | `EventReportPage` | Dynamic report and narrative logs of concluded drives. | Public |
| `/internships` | `InternshipsPage` | Stream spec directories and available cohort opening grids. | Public |
| `/internships/domain/:id`| `DomainDetailsPage` | Dynamic prerequisites and open positions inside a domain stream. | Public |
| `/internships/opportunity/:id`| `InternshipOpportunityPage`| Dynamic position details, seat metrics, and apply paths. | Public |
| `/internships/apply` | `InternshipApplicationPage`| Master applicant submission form. | Public |
| `/internships/status`| `ApplicationStatusPage` | Dynamic lookup panel tracking screening progression. | Public |
| `/volunteer` | `VolunteerPortal` | Explaining onboarding pathways and signup parameters. | Public |
| `/verify-certificate`| `CertificateVerificationPage`| Verifiable registry validation desk using certificate ID. | Public |
| `/contact` | `ContactPage` | Contact forms routing to support teams by priority. | Public |
| `/donate` | `DonatePage` | Gateway detailing calculator and payment instructions. | Public |
| `/admin/login` | `AdminLoginPage` | Admin credentials access screen with mock help board. | Public |

### 15.2 Protected Workspace Routes Matrix
| Path | Component Class | Purpose and Description | Guard Scope |
| :--- | :--- | :--- | :--- |
| `/volunteer/dashboard`| `VolunteerDashboard`| Personal tracker (hours, tasks, timeline, team). | Volunteer |
| `/admin` | `AdminDashboardPage` | Executive CRM operations console and metrics charts. | Admin |
| `/admin/search` | `AdminGlobalSearchPage`| Search indexing people directory dynamically. | Admin |
| `/admin/people` | `AdminPeoplePage` | CRM registry database and cohort assigning tools. | Admin |
| `/admin/people/:id` | `AdminPersonProfilePage`| 360-degree demographic logs and contributions. | Admin |
| `/admin/volunteers` | `AdminVolunteersPage` | Service hours and tier elevation console. | Admin |
| `/admin/internships` | `AdminInternshipsPage`| Applicant screening Kanban workspace. | Admin |
| `/admin/projects` | `AdminProjectsPage` | Project coordinators roster and workspaces. | Admin |
| `/admin/certificates`| `AdminCertificatesPage`| Certificate queue, approvals, and signature tools. | Admin |
| `/admin/events` | `AdminEventsPage` | Event rosters, attendance desk, and report publishers. | Admin |
| `/admin/donations` | `AdminDonationsPage` | Treasury ledger tracking intention codes. | Admin |
| `/admin/partnerships`| `AdminPartnershipsPage`| External corporate/academic alliance manager. | Admin |
| `/admin/inquiries` | `AdminInquiriesPage` | Support desk SLA ticketing coordinator. | Admin |
| `/admin/audit-logs` | `AdminAuditLogsPage` | Operations override trace audit trail. | Admin |
| `/admin/system-health`| `AdminSystemHealthPage`| Client diagnostics metrics and settings. | Admin |

---

## SECTION 16: MOCK DATA TO BACKEND MAPPING MATRIX

To guide the database implementation, the table below maps frontend mock files to their corresponding target backend routes:

| Mock File Path | Mock Relational Entity | Expected REST API Route | HTTP Method |
| :--- | :--- | :--- | :--- |
| `src/mocks/admin/people.js` | `People` (Directory) | `/api/admin/people` | `GET`, `POST` |
| `src/mocks/admin/people.js` | `People` (Individual) | `/api/admin/people/:id` | `GET`, `PUT`, `DELETE` |
| `src/mocks/admin/cohorts.js` | `Cohorts` | `/api/admin/cohorts` | `GET`, `POST` |
| `src/mocks/admin/certificates.js` | `Certificates` (Queue) | `/api/admin/certificates` | `GET`, `POST` |
| `src/mocks/admin/certificates.js` | `Certificates` (Verification) | `/api/certificates/verify/:id` | `GET` |
| `src/mocks/admin/donationsAdmin.js`| `Donations` (Ledger) | `/api/admin/donations` | `GET`, `POST` |
| `src/mocks/admin/partnershipsAdmin.js`| `Partnerships` (Alliances) | `/api/admin/partnerships` | `GET`, `PUT` |
| `src/mocks/admin/projects.js` | `Projects` | `/api/admin/projects` | `GET`, `POST` |
| `src/mocks/opportunities.js` | `Internship Openings` | `/api/internships` | `GET` |
| `src/mocks/opportunities.js` | `Internship Submissions` | `/api/internships/apply` | `POST` |
| `src/mocks/events.js` | `Events` | `/api/events` | `GET`, `POST` |
| `src/mocks/registrations.js` | `Registrations` | `/api/events/:id/register` | `POST` |
| `src/mocks/attendance.js` | `Attendance Registry` | `/api/volunteer/attendance` | `GET` |
| `src/mocks/attendance.js` | `Attendance Check-In` | `/api/events/:id/checkin` | `POST` |
| `src/mocks/admin/auditLogs.js` | `Audit Logs` | `/api/admin/audit-logs` | `GET` |

---

## SECTION 17: CONTENT SOURCES AND GOVERNANCE

Nonprofit visual identity, messaging, and operational statistics must align strictly with approved foundation documentation:

### 17.1 Approved Content Directories
* **Amaanitvam Website Content Sheet**: Accessible inside the Shared Google Drive under `/Documentation/Content/`. Contains all approved taglines, stats, address details, and phone numbers.
* **Foundation Branding Guidelines PDF**: Governs HSL color specifications, lotus emblem dimensions, and serif type hierarchies to maintain design integrity.
* **Approved Images Assets Drive**: Central repository for ground photos (hygiene drives, Manthan classrooms, study material distribution). Use these to replace mock placeholders.

### 17.2 Editorial Quality Policy
> [!CAUTION]
> **Do not invent organization content. Use approved foundation content only.** Technical contributors are prohibited from fabricating program metrics, partner organizations, or address locations.

---

## SECTION 18: OWNERSHIP TRANSFER CHECKLIST

This checklist monitors the transfer of platform credentials and environments to the core Amaanitvam Foundation Technical Team:

| Infrastructure Item | Handover Target | Handover Status |
| :--- | :--- | :--- |
| **GitHub Organization** | Admin access invitation sent to Core Technical Team. | **Pending** |
| **Repository Ownership** | Transfer repository settings to target organization. | **Pending** |
| **Vercel Deployment** | Transfer billing and project workspaces. | **Pending** |
| **Domain DNS Settings** | Point name server targets to Vercel/Netlify. | **Pending** |
| **Google workspace Drive** | Transfer ownership of content folder & guidelines. | **Pending** |
| **Email Accounts** | Handover credentials for foundation email accounts. | **Pending** |
| **Environment Variables** | Configuration files for backend stubs. | **Not Applicable** (No API keys active) |
| **API Keys** | Stripe / Razorpay dashboard logins. | **Not Applicable** (Gateways mocked) |

---

## SECTION 19: FIRST BACKEND SPRINT BLUEPRINT

To execute the Phase 1 backend integration roadmap, developers should execute the following Sprint 1 plan:

### 19.1 Sprint 1 Goals & Deliverables
* **Sprint Goal**: Establish the core Node.js/Python server, configure a PostgreSQL database, code authentication middleware, and write CRUD APIs for volunteer and internship applications.
* **Deliverables**:
  - A functional server connected to PostgreSQL.
  - User credentials database table with registration validation.
  - JWT token emission and routing middleware on protected routes.
  - Postman/Insomnia collections validating endpoints.

### 19.2 Technical Execution Tasks
1. **Initialize Workspace**: Spin up backend repo. Configure packages (e.g., Express, dotenv, cors, pg, bcrypt, jsonwebtoken).
2. **Database Migrations**: Setup schema. Create `people` table (relational directory) and `credentials` table (password hashes).
3. **JWT Authentication API**: Write `POST /api/auth/login` and `POST /api/auth/register-volunteer` to issue token payloads.
4. **People Directory CRUD**: Build endpoints for `GET /api/admin/people`, `GET /api/admin/people/:id`, and `PUT /api/admin/people/:id`.
5. **Onboarding Submission APIs**: Code `POST /api/volunteer/applications` and `POST /api/internships/apply`.

---

## SECTION 20: KNOWN FRONTEND BUGS AND PENDING REFINEMENTS

The next technical team should prioritize the following bug-fix and content refinement items:

1. **Mobile Navigation Drawer Validation**: Real-device testing is required for different notch types (iPhone, Samsung) to ensure standard button offsets.
2. **Form Validation Checks**: Add robust regex validation checks for telephone numbers and ZIP codes inside applicant forms.
3. **Typography Consistency Checks**: Review HSL text color classes across administrative dashboards to ensure WCAG AA contrast readability.
4. **Image Optimization**: Replace static local placeholders in `public/` with optimized WebP configurations.
5. **SEO tags mapping**: Synced route metadata with dynamic analytics trackers.
6. **Admin authentication replacement**: Remove localStorage/sessionStorage auth checks and integrate dynamic header JWT validation.

---

## SECTION 21: DECISION HISTORY APPENDIX (ADR SUMMARIES)

Architectural decisions are detailed in [docs/architecture/decisions/](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/architecture/decisions/) and summarized below:

* **ADR-001: Custom JS SPA Engine**: Opted out of heavy framework runtimes (React, Vue) to keep initial bundles small (<20KB), simplify template processing, and eliminate complex compilers.
* **ADR-002: Vanilla JS Components**: Utilized class-based component models with `render()` and `init()` lifecycles to structure modular layouts without external library dependencies.
* **ADR-003: Tailwind CSS v4.0 Plugin**: Integrated `@tailwindcss/vite` to support theme-level token configurations directly inside Vite's pipeline, eliminating PostCSS overhead.
* **ADR-004: In-Memory Relational Mock Database**: Modeled database tables in frontend JavaScript modules (`opportunities.js`, `people.js`, etc.) to support parallel team development before backend APIs are ready.
* **ADR-005: Unified ERP/CRM Schema**: Structured the administrative operations around a centralized `People` table tracking participant states across roles (Volunteer, Intern, Alumni, Donor) to avoid redundant profiles.
