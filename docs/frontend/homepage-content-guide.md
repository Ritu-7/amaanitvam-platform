# Homepage Content & Editorial Guide

This document maps all editorial content, active copy lines, statistical data sources, image mappings, and CTA links of the Amaanitvam Foundation homepage.

---

## Document Metadata
* **Owner**: Content Team
* **Maintainer**: Content Manager
* **Reviewer**: Project Coordinator
* **Last Updated**: June 4, 2026
* **Dependencies**: [docs/frontend/homepage-architecture.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/frontend/homepage-architecture.md)

---

## 1. Call-to-Action (CTA) Mappings

All homepage CTA targets use the central navigation routing system. Below is the list of active buttons and links on the homepage:

| Section | Button Text | Target Constant | Final Hash Route | Action Description |
| :--- | :--- | :--- | :--- | :--- |
| **Hero** | `Donate Now` | `PATHS.DONATE` | `#/donate` | Routes to donation checkout calculator. |
| **Hero** | `Get Involved` | `PATHS.VOLUNTEER` | `#/volunteer` | Routes to the dedicated Volunteer Portal application. |
| **Hero** | `Verify Certificate` | `PATHS.VERIFY` | `#/verify-certificate` | Routes to certificate registry verification desk. |
| **Collective Action**| `Apply to Volunteer`| `PATHS.VOLUNTEER`| `#/volunteer` | Routes to volunteer applications. |
| **Collective Action**| `Donate Now` | `PATHS.DONATE` | `#/donate` | Routes to donation options. |
| **Collective Action**| `Join the Movement` | `PATHS.VOLUNTEER`| `#/volunteer` | Routes to volunteer portal (for community onboarding). |
| **Trust Systems** | `Verify Certificate Registry`| `PATHS.VERIFY`| `#/verify-certificate`| Routes to verification desk. |

---

## 2. Statistical Data Sources

The numbers displayed on the homepage in the counter strip are driven by a central data module.
* **Source of Truth File**: [foundationStats.js](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/content/foundationStats.js)
* **Rule**: Do not hardcode numbers inside components (like `TrustStrip.js`). Modifying the counts must happen inside `foundationStats.js`.
* **Statistics Metrics Mapping**:
  * **Volunteers**: Tracked hours and active roster indices.
  * **Children Impacted**: Direct learners enrolled across Project Manthan and Project Shiksha.
  * **Learning Centres**: Community study halls established.
  * **Outreach Campaigns**: Direct drives (distribution campaigns, seasonal help).

---

## 3. Landing Copy Reference

### 3.1 Reality Block (Challenge Section)
* **Quote Line**: `"Across underserved communities, young minds are held back not by a lack of potential, but by a lack of resources to guide their growth."`
* **Sub-Indicator**: `Amaanitvam bridges this gap through sustained grassroots support.`

### 3.2 Journey of Purpose (Mission & Vision)
* **Mission Today**: `We cultivate civic responsibility and active mentorship. By providing structured classroom support, guiding personal growth, and facilitating direct community outreach, we build spaces where children find the resources they need to shape their own futures.`
* **Vision Tomorrow**: `We envision a future where educational equity is a reality for every child. Our goal is to nurture a generation of confident, community-focused leaders who carry forward the values of mutual support and shared social responsibility.`

---

## 4. Landing Page Image Inventory

All image assets used on the homepage must reside in `/public/` (mapped to root urls in development):

| Component | Image Source Path | Alt Attribute Text | Description / Subject |
| :--- | :--- | :--- | :--- |
| **Hero** | `/classroom-child.jpg` | `"Smiling child holding book in a classroom with a volunteer hand on her shoulder"` | Child in classroom holding book with mentor support. |
| **Why We Exist** | `/landscape-child.jpg` | `"Child holding notebook and pencil in natural landscape hills under golden light"` | Child studying outside under golden lighting. |
| **Community** | `/field-children.jpg` | `"Children holding hands in a field at sunset looking at landscape"` | Children on hills looking at sunset. |
| **Footer** | `/amaanitvam-logo.png` | `"Amaanitvam Foundation Logo"` | Official lotus logo symbol. |
