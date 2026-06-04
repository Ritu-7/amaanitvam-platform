# Image Asset Governance & Guidelines

This document establishes the official governance rules for managing, compressing, naming, and importing image assets in the Amaanitvam Foundation Platform. Maintaining lightweight, highly-optimized images prevents visual layout shifts, page load bottlenecks, and high bandwidth costs.

---

## Document Metadata
* **Owner**: Creative & Assets Team
* **Maintainer**: UI/UX Designer / Frontend Developer
* **Reviewer**: Technical Core Team
* **Last Updated**: June 4, 2026
* **Dependencies**: [docs/frontend/content-architecture.md](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/docs/frontend/content-architecture.md)

---

## 1. Asset Storage Locations

Images are divided into two categories depending on how they are referenced in the codebase:

### A. Static Assets: [frontend/public/](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/public/)
Assets placed in the `public` folder are copied to the build output root verbatim without compilation processing by Vite.
* **Usage**: Ideal for large background photos, global logo marks, and favicons that are referenced via hard-coded strings in content configs or HTML templates.
* **Reference Path**: Referenced relative to the host root:
  ```javascript
  const logo = "/amaanitvam-logo.png";
  const bgImage = "/classroom-child.jpg";
  ```

### B. Bundled Assets: [frontend/src/assets/](file:///d:/Desktop/Amaanitvam-Internship/amaanitvam-platform/frontend/src/assets/)
Assets placed in the `src/assets` folder are processed, hashes are appended to filenames for cache-busting, and small assets might be inlined as Base64 strings.
* **Usage**: Ideal for vector icons, UI decorations, and small graphics used by page-specific components.
* **Reference Path**: Imported directly as JavaScript modules inside component files:
  ```javascript
  import heroBg from "../assets/hero.png";
  import logoIcon from "../assets/vite.svg";
  ```

---

## 2. File Format & Usage Matrix

To ensure compatibility, speed, and responsiveness, enforce the following format requirements:

| Format | Target Use Cases | Maximum Resolution | Compression Notes |
| :--- | :--- | :--- | :--- |
| **SVG** | Brand logos, page icons, ui indicators, vector illustrations | Infinite (Vector) | Run through SVGO optimizer to remove metadata. |
| **WebP** | Hero backdrops, event photos, story galleries, program imagery | 1920 x 1080 px | Primary choice for photographs. Lossy WebP with quality 80-85%. |
| **JPG / JPEG** | Secondary photographic uploads, legacy editorial submissions | 1200 x 800 px | Fallback for photography when WebP is not sourceable. |
| **PNG** | Screenshots of UIs, transparency-backed product mockups | 800 x 800 px | Do not use for photo banners. Keep under 100KB. |

---

## 3. Aspect Ratio Standards & Grid Layouts

Mismatched aspect ratios result in unstable layouts and broken design grids. Contributors must crop assets to these standard bounds before uploading:

* **16:9 Landscape (1.77 Ratio)**
  - *Usage*: Hero Section sliders, Event Report banners, Event Gallery grid cards.
  - *Recommended Dimensions*: `1280x720` or `1920x1080` (Hero).
* **4:3 Classic (1.33 Ratio)**
  - *Usage*: Impact Stories list thumbnails, Programs cards, Core Value grids.
  - *Recommended Dimensions*: `800x600` or `640x480`.
* **1:1 Square (1.00 Ratio)**
  - *Usage*: Team profile avatars, testimonials, QR certificate verification blocks.
  - *Recommended Dimensions*: `300x300` or `150x150`.

---

## 4. Asset Compression & Naming Conventions

### File Naming Conventions
- Always write names in **lowercase** using **hyphens** to separate words. Do not use spaces, capital letters, or special characters.
- Follow this structure: `[category]-[description].[extension]`
  - *Good*: `classroom-child.jpg`, `manthan-banner.webp`, `avatar-arjun-mehta.jpg`
  - *Bad*: `Classroom Child.JPG`, `image 1 (2).png`, `screenshot_final_v2.png`

### Optimization Pipeline
Before adding any image to `public/` or `src/assets/`, run it through these tools:
1. **[Squoosh.app](https://squoosh.app/) (Google Chrome Labs)**:
   - Load the image, choose **WebP** output format, set quality to **80%**, and check the output size.
2. **[TinyPNG](https://tinypng.com/)**:
   - Ideal for compressing SVG, PNG, and JPEG files in bulk.
3. **CLI Compression (For developers)**:
   - For rapid builds, use tools like `imagemin` or standard CLI wrappers for `cwebp`.

---

## 5. Verification Checklist

During code reviews, maintainers must verify:
- [ ] No image exceeds **300 KB** (Hero backdrops should stay below 200 KB, grid thumbnails below 50 KB).
- [ ] No raw camera images (e.g. 5MB `.JPG` files directly from phone cameras) are checked into the repository.
- [ ] All dynamic images in `src/content/` resolve to active absolute urls or `/` relative assets.
- [ ] The CSS layout properties `object-cover` and `w-full h-full` are declared on HTML `<img>` nodes to handle flexible rendering without squeezing.
