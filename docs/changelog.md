---
sidebar: false
aside: false
---

# Changelog

## v1.1.3(August 6, 2025)
### Bug Fixes
- Post cover placeholder not effect.
- regular page comments doesn't display.
- License url too long to page overflow.

### Style
- Codeblock plaintext style.
- Github Alert style.
- Post card style.
- Order list number color.
- Related post style minilize.
- Post navigation height.

### Feature
- New `About` partials.
- New `link` shortcode.
- Improve search and TOC user experience.

### Refactor
- Refactor CSS framework, delete `@tailwindcss/typography` dependency.

## v1.1.2(July 2, 2025)
### Bug Fixes
- Fixed frontmatter license params is not taking effect.

### Style
- Image display center.

### Breaking Changes
- license params add `author` and `show` params
- delete `showLicense` params

```diff
params:
  post:
-   showLicense: true
    license:
+     show: true
+     author: "Hugo Narrow"
      name: "CC BY-NC-SA 4.0"
      description: "This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. Please attribute the source, use non-commercially, and maintain the same license."
      url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
      displayName: "CC BY-NC-SA 4.0"

```

## v1.1.1(June 25, 2025)
### Bug Fixes
- Fixed masonry shortcode style failure issue caused by duplicate IDs
- Fixed glightbox and Justified parameter settings not taking effect

### Style Improvements
- Optimized link and footnote styles
- Added scrollbar styling
- More color schemes from [tweakcn](https://tweakcn.com/)

## v1.1.0 (June 17, 2025)

### Breaking Changes
Gallery configuration structure has been updated. Please update your Hugo configuration, visit [Release Notes](https://github.com/tom2almighty/hugo-narrow/releases/tag/v1.1.0).
### New Features
- Masonry Gallery Shortcode: Added support for masonry/waterfall layout with the new `{\{< masonry >}}` shortcode

### Improvements
- New Lightbox System: Migrated from lightGallery to GLightbox for improved performance and modern user experience
- Enhanced Justified Layout: Replaced jQuery-based justified gallery with flickr-justified-gallery for better native JavaScript support
- Removed jQuery Dependency: Complete elimination of jQuery from the gallery system, resulting in faster loading times and reduced bundle size

### Bug Fixes
- Fixed i18n translation issues in post-meta component
- Resolved analytics template inclusion problem

## v1.0.0 (June 14, 2025)
### New Features
- Integrated Hugo's built-in SEO templates
- Implemented gallery and justified gallery support
- Added customizable placeholder images for article covers

### Improvements
- Removed redundant metadata fields
- Fixed article navigation descriptions in post pages
