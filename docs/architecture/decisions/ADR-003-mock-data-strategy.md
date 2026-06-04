# ADR-003: Mock-First Data Strategy

## Status
Approved

## Context
Amaanitvam Foundation is developed by a distributed group of student developers. Building backend servers, modeling databases, deploying server nodes, and securing APIs takes time and requires specialized skills. 

Waiting for a fully integrated backend would block frontend teams from designing operational modules (such as Volunteer consoles, Certificate approval matrices, and Admin search systems).

## Decision
We adopted a Mock-First decoupled data strategy:
* We create mock relational databases utilizing structured Javascript arrays (located under `src/mocks/admin/`).
* These mocks model real-world relationships (e.g. mapping Person Profiles to Volunteer hours and event attendance indices).
* The client uses standard browser memory stores (`localStorage` and `sessionStorage`) to track state modifications during a user session.
* All mock files serve as the blueprint schema contracts for the future database team.

## Consequences
* **Positives**:
  * **Parallel Engineering**: Frontend developers build and verify complex admin workflows without a running API server.
  * **Contract Drafts**: Schema shapes in mock files are pre-negotiated and act as the design specification for the backend database developers.
  * **Local Demo Capabilities**: Stakeholders can test the entire volunteer and administration lifecycle directly in the browser.
* **Negatives**:
  * **Memory Limits**: Caching changes in local storage means data resets when storage is cleared or when testing across multiple browsers.
  * **No Real-Time Sync**: Changes made by one tester are not visible to another without backend deployment.
