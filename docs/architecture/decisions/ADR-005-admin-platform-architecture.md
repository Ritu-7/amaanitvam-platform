# ADR-005: Admin Platform Relational CRM Architecture

## Status
Approved

## Context
Amaanitvam Foundation operations involve tracking volunteers, interns, alumni, and donors. Initially, these lists existed in disconnected spreadsheets and files. This created operational problems:
1. **Data Duplication**: A student who volunteered for Project Manthan and then did an internship for Project Shiksha had records in separate directories, requiring double entry.
2. **Fragmented Histories**: No single profile displayed a participant's complete lifecycle (e.g. tracking their donations, events attended, and hours completed in one place).
3. **Operational Bottlenecks**: Admin leads couldn't perform a global search across all platforms in one search box.

## Decision
We chose to restructure the Admin Operations Center around a centralized, relational **People Directory** (modeled in mock database `people.js`):
* Volunteers, Interns, and Alumni are treated as dynamic views (filters) built on top of a core People registry database.
* The Person Profile detail view (`#/admin/people/:id`) is relational, linking demographic records to:
  * Volunteer logs and hours.
  * Event participation logs.
  * Internship cohort assignments and progress.
  * Certificates issued.
  * Donation records and transactions.
* Global search query scanning is routed across all relational lists in one dashboard page.

## Consequences
* **Positives**:
  * **Unified Records**: All historical operational interactions of a single participant are consolidated in one profile.
  * **Zero Duplication**: Data update changes cascade across dashboard components.
  * **Better Analytics**: Leads can view growth tiers and overall retention statistics.
* **Negatives**:
  * **Complex Query Logic**: Rendering relational records on the client side requires map and filter operations across multiple mock collections.
  * **Schema Strictness**: All participants must conform to a standardized schema layout.
