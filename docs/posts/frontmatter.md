# Front Matter Configuration Guide

Front Matter is the YAML-formatted configuration section at the beginning of each Markdown file, used to set article metadata and specific features. The Hugo Narrow theme supports common Front Matter configurations.

## Basic Configuration Items

```yaml
---
# Required fields
title: "Article Title"
date: 2025-06-13
# Optional fields
description: "Article Description"
draft: false  # Whether it's a draft
categories: ["Category1", "Category2"]
tags: ["Tag1", "Tag2"]
slug: "custom-url"  # Custom URL
---
```

> [!NOTE] 
> If you don't care about SEO, you can use the following configuration in your `~/archetypes/default.md` file to automatically generate a slug
> ```yaml
> slug: {{ substr .File.UniqueID 0 7 }}
> ```

## Article Cover

```yaml
---
cover: ''
---
```

The article cover has a fallback:

- Prioritizes the value specified by the `cover` parameter
- When cover is not set:
  - If `enabled: true` is set in `~/data/placeholder_images.yaml`, uses a random cover from the list
  - If `enabled: false` is set in `~/data/placeholder_images.yaml`, the theme automatically generates a random placeholder image.

### Specifying Links

The `cover` value supports both external URLs and local resources, prioritizing page resources, then global resources, and finally static directory resources.

For local resource references, see [Image](/posts/image)


### Specifying Lists

You can set a random cover list in `~/data/placeholder_images.yaml` with the following configuration:

```yaml
# Feature enable switch
enabled: false

# Image URL list (supports external URLs and local paths)
images:
  # Picsum Photos
  #- "https://picsum.photos/800/600?random=1"
  #- "https://picsum.photos/800/600?random=2"
  #- "https://picsum.photos/800/600?random=3"
  #- "https://picsum.photos/800/600?random=4"
  #- "https://picsum.photos/800/600?random=5"
  #- "https://picsum.photos/800/600?random=6&blur=1"
  #- "https://picsum.photos/800/600?random=7&grayscale"
  # local images
  - "/images/placeholder/1.jpg"
  - "/images/placeholder/2.jpg"
  - "/images/placeholder/3.jpg"  
  - "/images/placeholder/4.jpg"
  - "/images/placeholder/5.jpg"
  - "/images/placeholder/6.jpg"
  - "/images/placeholder/7.jpg"
  - "/images/placeholder/8.jpg"
```

### Auto Generation

When the `cover` value is not set and the enabled field in `~/data/placeholder_images.yaml` is set to `false`, the theme will automatically generate placeholder images in several colors that adapt to different theme color schemes.


## Math Formula Support

```yaml
---
katex:
  enable: true
  delimiters:
    - left: $$
      right: $$
      display: true
    - left: $
      right: $
      display: false
---
```

## Chart Support

```yaml
---
mermaid: true
---
```

## Comments

```yaml
---
comments: true
---
```

## License

```yaml
---
# License
showLicense: true
# custom license
license:
  name: "CC BY-NC-SA 4.0"
  link: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
---
```

## Related Posts

```yaml
---
# Related posts
showRelated: true
relatedPostsCount: 3
---
```

## Lightbox

```yaml
---
# GLightbox
lightbox:
  enabled: true
  loop: true
  width: 80vw
  height: 80vh
  touchNavigation: true
  draggable: true
  zoomable: true
  preload: true
  descPosition: bottom
---
```

## Justified Gallery

```yaml
---
# Justified Gallery
justified_gallery:
  enabled: true
  rowHeight: 300
  gutter: 30
  lastRow: center
  transitionDuration: 0.3s
  resizeDebounce: 100
  rowHeightTolerance: 0.25
  maxRowsCount: 999999
  calculateItemsHeight: false
---
```
Visit [Gallery](../configration/gallery).

## Full Front Matter

```yaml
---
# basic info
title: "Front Matter"
date: 2025-06-13T10:00:00+08:00
description: "This is a post show all Front Matter"
draft: false

# categories and tags
categories: ["Intro"]
tags: ["Hugo", "Front Matter", "Configration"]

# cover
cover: "cover.jpg"

# katex
katex:
  enable: true
  delimiters:
    - left: $$
      right: $$
      display: true
    - left: $
      right: $
      display: false
mermaid: true
comments: true
showLicense: true
showRelated: true

# lightbox
lightbox:
  enabled: true
  loop: true
  width: 80vw
  height: 80vh
  touchNavigation: true
  draggable: true
  zoomable: true
  preload: true
  descPosition: bottom

# Justified Gallery
justified_gallery:
  enabled: true
  rowHeight: 300
  gutter: 30
  lastRow: center
  transitionDuration: 0.3s
  resizeDebounce: 100
  rowHeightTolerance: 0.25
  maxRowsCount: 999999
  calculateItemsHeight: false
---
```

