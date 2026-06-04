# ADR-004: Certificate Verification System Architecture

## Status
Approved

## Context
Amaanitvam Foundation awards certificates of recognition to student volunteers and internship alumni. To secure institutional trust and allow corporate partners or universities to audit these credentials, we need to guarantee that issued certificates are genuine, tamper-proof, and verify records directly.

Static physical printouts or PDFs are vulnerable to alteration (e.g. altering names or hours).

## Decision
We implemented a digital verification registry system hosted on the platform:
* **Registry Vault**: A secure list of issued certificates mapping ID hashes, recipient details, track dates, and terms.
* **Canonical Path**: Third-party reviewers verify credentials through the canonical path `#/verify-certificate`.
* **Tamper Proofing**: Certificates are printed with QR codes pointing to `amaanitvam.org/#/verify-certificate?id=CERT-XXXX`. Upon query, the platform scans the registry vault and checks matching details.

## Consequences
* **Positives**:
  * **Combat Forgery**: Any alteration to a certificate's name or code is easily identified by querying the official registry.
  * **Institutional Trust**: Recruitment teams and university registrars can audit student service logs in seconds.
* **Negatives**:
  * **Data Privacy**: Displaying credentials requires recipient consent. Recipients explicitly authorize registry inclusion during their onboarding lifecycle.
