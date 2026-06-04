# Frontend-to-Backend API Mapping Matrix

This matrix provides backend developers with a complete catalog of every frontend view component in the Amaanitvam Platform, mapping them to their corresponding required REST API endpoints, HTTP methods, input parameters, and authentication rules.

---

## Technical Architecture Conventions

1. **Authentication Headers:**
   All routes marked `Protected` require the bearer token or session cookie to be supplied:
   - Volunteer operations: `Authorization: Bearer <volunteer_jwt>`
   - Intern operations: `Authorization: Bearer <intern_jwt>`
   - Admin operations: `Authorization: Bearer <admin_jwt>`

2. **JSON Payloads:**
   All write request formats (`POST`, `PUT`, `PATCH`) transmit payloads in structured JSON (`Content-Type: application/json`) unless file uploads (like Resume PDF) require `multipart/form-data`.

---

## 1. Public Core Views

These screens are public-facing and do not require user authentication.

| Page Component & File | Router Path | Required Backend API Endpoint | Method | Purpose & Parameters |
| :--- | :--- | :--- | :--- | :--- |
| **HomePage**<br>[HomePage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/HomePage.js) | `/` | `GET /api/v1/public/snapshot` | `GET` | Retrieves aggregate metrics (centers count, children reached, volunteers hours). |
| **AboutPage**<br>[AboutPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/AboutPage.js) | `/about` | `GET /api/v1/public/team` | `GET` | Retrieves board members, advisors, and student coordinators list. |
| | | `GET /api/v1/public/timeline` | `GET` | Retrieves foundation historical milestones timeline data. |
| **ProgramsPage**<br>[ProgramsPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/ProgramsPage.js) | `/programs` | `GET /api/v1/public/programs` | `GET` | Retrieves active programs catalog (Project Manthan, Shiksha, Pravah data). |
| **ImpactPage**<br>[ImpactPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/ImpactPage.js) | `/impact` | `GET /api/v1/public/impact/metrics` | `GET` | Retrieves advanced verification stats (learning ratios, camp registries summaries). |
| **EventsPage**<br>[EventsPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/EventsPage.js) | `/events` | `GET /api/v1/events` | `GET` | Retrieves scheduled drives and camps list. Supports query limits.<br>*Query Parameters: `?status=Open&limit=10`* |
| **EventDetailsPage**<br>[EventDetailsPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/EventDetailsPage.js) | `/events/view/:slug` | `GET /api/v1/events/:slug` | `GET` | Retrieves description, agenda, coordinates, and roster status for a single event. |
| | | `POST /api/v1/events/:slug/rsvp` | `POST` | Registers a public user interest or check-in to attend the drive.<br>*Payload: `{ "name": string, "email": string, "phone": string }`* |
| **EventReportPage**<br>[EventReportPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/EventReportPage.js) | `/events/:slug` | `GET /api/v1/events/:slug/report` | `GET` | Retrieves retrospective metrics, outcomes, activities, and tag indexes for a completed event. |
| **ContactPage**<br>[ContactPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/ContactPage.js) | `/contact` | `POST /api/v1/inquiries` | `POST` | Submits general ticketing questions.<br>*Payload: `{ "name": string, "email": string, "category": string, "message": string }`* |
| | | `POST /api/v1/partnerships` | `POST` | Submits institutional or CSR partnership queries.<br>*Payload: `{ "company": string, "contactPerson": string, "email": string, "proposal": string }`* |
| **DonatePage**<br>[DonatePage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/DonatePage.js) | `/donate` | `POST /api/v1/donations/checkout` | `POST` | Prepares donation config session for payment processing integrations.<br>*Payload: `{ "amount": number, "frequency": "once"\|"monthly", "tier": string }`* |
| **CertificateVerificationPage**<br>[CertificateVerificationPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/CertificateVerificationPage.js) | `/verify-certificate` | `GET /api/v1/certificates/verify` | `GET` | Checks certificate database validity using verification registry code.<br>*Query Parameters: `?id=CERT-XXXX-XXXX`* |

---

## 2. Volunteer & Intern Portals (Self-Service)

These areas handle onboarding logins and self-service consoles.

| Page Component & File | Router Path | Required Backend API Endpoint | Method | Auth | Purpose & Parameters |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **VolunteerPortal**<br>[VolunteerPortal.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/VolunteerPortal.js) | `/volunteer` | `POST /api/v1/auth/volunteer/login` | `POST` | Public | Logs into volunteer dashboard. Returns session JWT.<br>*Payload: `{ "email": string, "code": string }`* |
| | | `POST /api/v1/auth/volunteer/register` | `POST` | Public | Submits registration to join roster.<br>*Payload: `{ "name": string, "email": string, "phone": string, "hoursCommitment": number }`* |
| **VolunteerDashboard**<br>[VolunteerDashboard.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/VolunteerDashboard.js) | `/volunteer/dashboard` | `GET /api/v1/volunteer/profile` | `GET` | Protected | Retrieves name, checkup stats, and hours metrics. |
| | | `GET /api/v1/volunteer/tasks` | `GET` | Protected | Retrieves active tasks checklist assigned to the volunteer. |
| | | `GET /api/v1/volunteer/certificates` | `GET` | Protected | Retrieves list of issued credentials and verification links. |
| | | `POST /api/v1/volunteer/attendance/clock` | `POST` | Protected | Submits drive presence code check-ins for hours log.<br>*Payload: `{ "driveCode": string }`* |
| **InternDashboardPage**<br>[InternDashboardPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/InternDashboardPage.js) | `/intern/dashboard` | `GET /api/v1/intern/profile` | `GET` | Protected | Retrieves intern profile, active cohort info, and mentor assignment. |
| | | `GET /api/v1/intern/curriculum` | `GET` | Protected | Retrieves weekly tasks schedule list. |
| | | `GET /api/v1/intern/deliverables` | `GET` | Protected | Retrieves tasks submission history and check-off grades. |
| | | `POST /api/v1/intern/deliverables/:id/submit` | `POST` | Protected | Uploads links or documents for weekly task evaluations.<br>*Payload: `{ "submissionUrl": string, "comments": string }`* |

---

## 3. Internship Applications

| Page Component & File | Router Path | Required Backend API Endpoint | Method | Auth | Purpose & Parameters |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **InternshipsPage**<br>[InternshipsPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/InternshipsPage.js) | `/internships` | `GET /api/v1/internships/opportunities` | `GET` | Public | Retrieves open slots and active cohort opportunities list. |
| **DomainDetailsPage**<br>[DomainDetailsPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/DomainDetailsPage.js) | `/internships/domain/:id` | `GET /api/v1/internships/domains/:id` | `GET` | Public | Retrieves skill checklists, syllabus templates, and active openings matching a domain specialization slug. |
| **InternshipOpportunityPage**<br>[InternshipOpportunityPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/InternshipOpportunityPage.js) | `/internships/opportunity/:id` | `GET /api/v1/internships/opportunities/:slug` | `GET` | Public | Retrieves full specs (duration, seats filled) for a specific opening slot. |
| **InternshipApplicationPage**<br>[InternshipApplicationPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/InternshipApplicationPage.js) | `/internships/apply` | `POST /api/v1/internships/applications` | `POST` | Public | Submits internship enrollment request with attachment.<br>*Format: multipart/form-data*<br>*Fields: `opportunityId` (string), `name` (string), `email` (string), `sop` (string), `resume` (File)* |
| **ApplicationStatusPage**<br>[ApplicationStatusPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/ApplicationStatusPage.js) | `/internships/status` | `GET /api/v1/internships/applications/status` | `GET` | Public | Searches application review stages.<br>*Query Parameters: `?query=email_or_phone_or_appId`* |

---

## 4. Administrative Control Center (Protected CRM/ERP)

All routes require active Admin credentials.

| Page Component & File | Router Path | Required Backend API Endpoint | Method | Purpose & Parameters |
| :--- | :--- | :--- | :--- | :--- |
| **AdminLoginPage**<br>[AdminLoginPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/AdminLoginPage.js) | `/admin/login` | `POST /api/v1/auth/admin/login` | `POST` | Authenticates administrator credentials. Returns session object.<br>*Payload: `{ "email": string, "password": string }`* |
| **AdminDashboardPage**<br>[AdminDashboardPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/AdminDashboardPage.js) | `/admin` | `GET /api/v1/admin/dashboard/summary` | `GET` | Retrieves aggregate metrics, campaign success ratios, and alerts. |
| **AdminGlobalSearchPage**<br>[AdminGlobalSearchPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/AdminGlobalSearchPage.js) | `/admin/search` | `GET /api/v1/admin/search` | `GET` | Queries across directories (people, certificates, events).<br>*Query Parameters: `?q=search_term`* |
| **AdminPeoplePage**<br>[AdminPeoplePage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/AdminPeoplePage.js) | `/admin/people` | `GET /api/v1/admin/people` | `GET` | Retrieves lists of staff, volunteers, and interns registry.<br>*Query Parameters: `?role=volunteer&limit=50`* |
| **AdminPersonProfilePage**<br>[AdminPersonProfilePage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/AdminPersonProfilePage.js) | `/admin/people/:id` | `GET /api/v1/admin/people/:id` | `GET` | Retrieves complete details (hours ledger, background checks) for a person. |
| | | `PATCH /api/v1/admin/people/:id` | `PATCH` | Updates profile fields or active status.<br>*Payload: `{ "status": string, "note": string }`* |
| **AdminVolunteersPage**<br>[AdminVolunteersPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/AdminVolunteersPage.js) | `/admin/volunteers` | `GET /api/v1/admin/volunteers/approvals` | `GET` | Retrieves pending hours clock-ins requesting coordinator approval. |
| | | `POST /api/v1/admin/volunteers/approvals/:id/resolve` | `POST` | Approves or rejects volunteer hours claims.<br>*Payload: `{ "approve": boolean, "adjustedHours": number }`* |
| **AdminInternshipsPage**<br>[AdminInternshipsPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/AdminInternshipsPage.js) | `/admin/internships` | `GET /api/v1/admin/internships/kanban` | `GET` | Retrieves active cohorts, review queue, and mentor maps. |
| | | `PATCH /api/v1/admin/internships/applications/:id` | `PATCH` | Changes applicant status (e.g. Scheduled, Accepted, Rejected).<br>*Payload: `{ "status": string }`* |
| **AdminProjectsPage**<br>[AdminProjectsPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/AdminProjectsPage.js) | `/admin/projects` | `GET /api/v1/admin/projects` | `GET` | Retrieves pathways targets and local school logistics logs. |
| **AdminCertificatesPage**<br>[AdminCertificatesPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/AdminCertificatesPage.js) | `/admin/certificates` | `GET /api/v1/admin/certificates/queue` | `GET` | Retrieves pending list of graduates eligible for credentials. |
| **CertificateGeneratorPage**<br>[CertificateGeneratorPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/CertificateGeneratorPage.js) | `/admin/certificates/new` | `POST /api/v1/admin/certificates/generate` | `POST` | Generates a new cryptographically signed certificate.<br>*Payload: `{ "recipientId": string, "templateId": string, "expiryDate": string }`* |
| **AdminCertificateDetailPage**<br>[AdminCertificateDetailPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/AdminCertificateDetailPage.js) | `/admin/certificates/view` | `GET /api/v1/admin/certificates/:id` | `GET` | Retrieves details and layout configurations for a specific credential. |
| **AdminEventsPage**<br>[AdminEventsPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/AdminEventsPage.js) | `/admin/events` | `GET /api/v1/admin/events` | `GET` | Retrieves active/draft/past campaigns list. |
| **EventCreatorPage**<br>[EventCreatorPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/EventCreatorPage.js) | `/admin/events/new` | `POST /api/v1/admin/events` | `POST` | Submits a new event drive draft campaign.<br>*Payload: `{ "title": string, "date": string, "capacity": number, "description": string }`* |
| **EventReportPublisherPage**<br>[EventReportPublisherPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/EventReportPublisherPage.js) | `/admin/events/report` | `POST /api/v1/admin/events/reports` | `POST` | Publishes campaign metrics summaries into public archives.<br>*Payload: `{ "eventId": string, "activities": string, "participants": number, "outcomes": string }`* |
| **AdminDonationsPage**<br>[AdminDonationsPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/AdminDonationsPage.js) | `/admin/donations` | `GET /api/v1/admin/donations` | `GET` | Retrieves donor ledgers, transaction values, and payment status details. |
| **AdminPartnershipsPage**<br>[AdminPartnershipsPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/AdminPartnershipsPage.js) | `/admin/partnerships` | `GET /api/v1/admin/partnerships` | `GET` | Retrieves corporate CSR interest logs and meeting notes. |
| **AdminInquiriesPage**<br>[AdminInquiriesPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/AdminInquiriesPage.js) | `/admin/inquiries` | `GET /api/v1/admin/inquiries` | `GET` | Retrieves tickets, categorizations, and resolver details. |
| | | `PATCH /api/v1/admin/inquiries/:id` | `PATCH` | Updates ticket status or records responder logs.<br>*Payload: `{ "status": "Resolved"\|"Pending", "response": string }`* |
| **AdminSystemHealthPage**<br>[AdminSystemHealthPage.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/pages/AdminSystemHealthPage.js) | `/admin/system-health` | `GET /api/v1/admin/system/diagnostics` | `GET` | Retrieves uptime percentages, database size, and mock storage loads. |
