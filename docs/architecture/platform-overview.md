# Platform Overview & System Architecture

This document provides a birds-eye view of the **Amaanitvam Foundation Platform**, defining module relationships, page hierarchy structures, operational pathways, and the technical development roadmap.

---

## Document Metadata
* **Owner**: Architecture Team
* **Maintainer**: Shashank Shekhar
* **Reviewer**: Lead Project Coordinator
* **Last Updated**: June 4, 2026
* **Dependencies**: [docs/README.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/README.md)

---

## 1. System Module Architecture

The platform operates as a unified nonprofit CRM/ERP ecosystem. While modules appear isolated on the frontend to visitors, they are deeply interconnected on the operational level.

```text
                  +----------------------------------------------+
                  |           Visitor & User Entry Ports         |
                  +----------------------------------------------+
                                  |
         +------------------------+------------------------+
         |                        |                        |
+----------------+       +-----------------+       +----------------+
| Public Website |       | Volunteer Portal|       | Internship Port|
| - Home         |       | - Applications  |       | - Job Details  |
| - About Us     |       | - Journey Track |       | - Forms/Apply  |
| - Programs     |       | - Profile/Skills|       | - Status Check |
| - Impact/Blog  |       | - Dashboard     |       | - Workspace    |
| - Contact Us   |       +-----------------+       +----------------+
| - Donate Port  |                |                        |
+----------------+                |                        |
         |                        v                        v
         |            +----------------------------------------+
         |            |         Central People Database        |
         |            +----------------------------------------+
         |                                |
         |      +-------------------------+-------------------------+
         |      |                         |                         |
         v      v                         v                         v
+-----------------------+     +-----------------------+     +---------------+
| Verification Platform |     | Events Management     |     | Admin Center  |
| - Certificate Checks  |     | - Registration        |     | - Relational  |
| - Registry Vault      |     | - Attendance / QR     |     | - Global Search
| - Signature Decoders  |     | - Reporting / Gallery |     | - Audit Trail |
+-----------------------+     +-----------------------+     +---------------+
```

---

## 2. Platform Modules & Roles

### 2.1 Public Core
* **Homepage**: Strategic entry point structuring reality context, trust strips, chapters, and paths.
* **About Us**: Narrative documentation detailing student origin, values, and milestone timeline.
* **Programs**: Granular breakdown of Manthan (Education), Shiksha (Access), and Pravah (Outreach).
* **Impact**: Visual gallery and field stories showcasing ground metrics.
* **Contact**: Operational inquiry routers sorting issues by priority and SLA targets.
* **Donate**: Secure gateway allowing calculator-based contributions mapping funding intents.

### 2.2 Functional Operations
* **Volunteer Portal & Dashboard**: Onboarding, application, demographic tagging, workspace, task tracking, and milestone credentials logs.
* **Internship Portal**: Track directories, application screening, mentor allocation, and cohort metrics.
* **Events Platform**: Operations coordinator board for organizing, scheduling, tracking attendance, and publishing reports.
* **Certificate System**: Digitally signed, tamper-proof service and academic certifications.
* **Admin Operations Center**: Multi-role, CRM platform consolidating People records, Project tracking, global relational search, and SLA logs.

---

## 3. Page Hierarchy Map

All endpoints load dynamically into `#app` as Single Page Application views:

```text
#/                                      <-- Homepage
├── #/about                             <-- About Us Page
├── #/programs                          <-- Programs Page
├── #/impact                            <-- Impact & Story Page
├── #/contact                           <-- Contact & Inquiry Page
├── #/donate                            <-- Donation Platform
├── #/privacy-policy                    <-- Privacy Policy
├── #/terms-and-conditions              <-- Terms & Conditions
│
├── #/events                            <-- Events Board Listing
│   └── #/events/view/:id               <-- Detailed Event Report
│
├── #/internships                       <-- Internship Track Board
│   ├── #/internships/domain/:id        <-- Detail Track Specs
│   ├── #/internships/opportunity/:id   <-- Specific Opening Apply
│   ├── #/internships/apply             <-- Master Application Form
│   └── #/internships/status            <-- Live Application Status Tracker
│
├── #/volunteer                         <-- Volunteer Onboarding Portal
│   └── #/volunteer/dashboard           <-- Volunteer Console (Guard Protected)
│
├── #/verify-certificate                <-- Verification Platform (Canonical Registry)
│
└── #/admin                             <-- Admin Console Entry
    ├── #/admin/login                   <-- Admin Login Portal
    ├── #/admin/search                  <-- Global Relational Search
    ├── #/admin/people                  <-- Unified People Directory
    │   └── #/admin/people/:id          <-- 360-Degree Profile View
    ├── #/admin/volunteers              <-- Volunteers Metric View
    ├── #/admin/internships             <-- Application screening Kanban
    ├── #/admin/projects                <-- Operational Projects Tracker
    ├── #/admin/certificates            <-- Certifications Approval Queue
    ├── #/admin/events                  <-- Event Creation & Reporting Desk
    ├── #/admin/donations               <-- Ledger & Funding Intent Analytics
    ├── #/admin/partnerships            <-- Partner Coordination Matrix
    ├── #/admin/inquiries               <-- Support Desk SLA Ticket Manager
    ├── #/admin/audit-logs              <-- Operation Logging Trail
    └── #/admin/system-health           <-- Infrastructure Diagnostics
```

---

## 4. Key User Journeys

### 4.1 The Volunteer Journey
```text
Visitor loads #/volunteer
  --> Explores opportunities
  --> Fills application form
  --> Application recorded in DB (Mocks)
  --> Admin reviews and approves in #/admin/internships
  --> Volunteer logs in and gets access to #/volunteer/dashboard
  --> Participates in events
  --> Requests and receives verified certificate
```

### 4.2 Certificate Issuance and Verification
```text
Admin accesses #/admin/certificates/new
  --> Inputs recipient ID, term, track, and signs
  --> Certificate generated and stored in Registry
  --> Recipient gets ID (e.g. CERT-2026-X8Y9)
  --> Third party loads #/verify-certificate
  --> Inputs ID
  --> System checks registry and decodes details
```

---

## 5. Development Roadmap

### Phase 1: Core Operations (Current State)
* Fully client-side build with unified router, components system, custom styling tokens.
* Complete Volunteer Portal, Dashboard, Certificate verification tool, and Contact/Donation routers.
* Integrated local caching (`sessionStorage`/`localStorage`) to model multi-stage sessions.

### Phase 2: Backend Integration & DB Model (Upcoming)
* Migrate relational mock engines to database entities.
* Introduce JWT authentication, password resets, and session management.
* Establish secure file storage pipelines for PDF resumes and JPG/PNG gallery attachments.

### Phase 3: Analytics and Operations Scale (Future)
* Deploy live analytics charts showing donation trends and cohort statistics.
* Integrate automated mail alerts for application status changes and certificate issuances.
* Introduce live chat and ticket assignment triggers.
