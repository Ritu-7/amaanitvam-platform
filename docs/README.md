# Amaanitvam Foundation Technical Documentation

Welcome to the official developer and operations documentation for the **Amaanitvam Foundation Platform**. This repository hosts a student-led platform designed to manage civic participation, coordinate volunteer/internship operations, issue verified academic and service credentials, and facilitate transparent donation pathways.

---

## Document Metadata
* **Owner**: Architecture & Project Leads
* **Maintainer**: Technical Core Team
* **Reviewer**: Lead Developer / Project Coordinator
* **Last Updated**: June 4, 2026
* **Dependencies**: None (Root Entry Point)

---

## 1. Project Purpose & Scope

Amaanitvam Foundation transitions from a simple informational static website to a specialized **Foundation Operations CRM/ERP software platform**. The system manages relations between:
* **The Community**: Program details, impact stories, upcoming events, contact and inquiry channels.
* **Civic Action Participants**: Unified volunteer pipelines, internship tracks, mentoring, and attendance logging.
* **Trust & Credentials**: A secure academic and service registry to issue, sign, and verify cryptographic certificates.
* **Administration**: Consolidated dashboards tracking donations, inquiry SLA responses, cohort metrics, and system auditing.

---

## 2. Technical Stack

* **Frontend Engine**: Pure Vanilla Javascript (ES6 Classes) - Zero client frameworks (React, Vue, or Angular) to guarantee high performance, absolute accessibility, and low bundle size.
* **Styling**: TailwindCSS (v4.0.0 Alpha/Beta) for rapid, design-token-driven visual styling, alongside specific Custom HSL Theme configurations.
* **Build System**: Vite for extremely fast production bundling, module hot-reloading (HMR), and resource optimization.
* **Data Layer**: Mock Data Strategy (using relational Javascript arrays representing entity registries) to facilitate offline prototyping prior to backend integration.
* **Routing**: Custom Hash Router (`window.location.hash`) handling dynamic parameter parsing, route guards, and automatic page scroll restoration.

---

## 3. Documentation System Roadmap

A new contributor or maintainer should utilize the following documentation index to navigate the platform's systems:

```text
docs/
├── README.md                           <-- (You are here) Overview & Stack Details
├── documentation-map.md                <-- Visual mapping of documentation folders
│
├── architecture/
│   ├── platform-overview.md            <-- Module relationships, journeys, roadmap
│   ├── frontend-architecture.md        <-- Hash router, component engine, mock contracts
│   ├── routes.md                       <-- Complete index of routing parameters &auth gates
│   ├── backend-integration-blueprint.md <-- API contracts, database schemas, prioritized phases
│   └── decisions/                      
│       ├── ADR-001-spa-routing.md      <-- Why custom SPA router
│       ├── ADR-002-hash-routing-choice.md <-- Why hash-based path matching
│       ├── ADR-003-mock-data-strategy.md <-- Why mock-first decoupled approach
│       ├── ADR-004-certificate-verification.md <-- Secure verification architecture
│       └── ADR-005-admin-platform.md   <-- Why relational CRM dashboard design
│
├── frontend/
│   ├── homepage-architecture.md        <-- Home page sections technical code details
│   ├── homepage-content-guide.md       <-- Copy guidelines, CTAs, statistics rules
│   ├── content-architecture.md         <-- Contributor boundaries (dev vs content files)
│   ├── image-management.md            <-- Compression rules, sizing ratios, file schemas
│   ├── module-registry.md              <-- Current completion status of modules
│   └── volunteer-platform.md           <-- Detailed volunteer portal & dashboard workflows
│
└── deployment/
    └── deployment-guide.md             <-- Local startup guide, environment variables, build outputs
```

---

## 4. Where New Contributors Should Start

1. **Local Setup**: Read the [Deployment & Startup Guide](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/deployment/deployment-guide.md) to install dependencies and run the local development server.
2. **Understand Routing**: Study the [Route Registry](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/architecture/routes.md) to understand how routes map to frontend page orchestrators.
3. **Learn Content Boundaries**: Read the [Content Architecture Guide](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/frontend/content-architecture.md) if you are editing copy, text stats, or image paths to avoid modifying core codebase templates.
4. **Inspect Decision Records**: Read the [Architecture Decisions Directory](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/architecture/decisions/) to comprehend the design constraints and engineering principles behind current choices.
