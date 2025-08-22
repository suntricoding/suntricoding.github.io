# Konfigurasi Dasar Situs

Dokumen ini merinci opsi konfigurasi dasar untuk tema Hugo Narrow. Semua konfigurasi dibuat dalam berkas `hugo.yaml`.

## Site Basic Info

```yaml
# Basic site configuration
baseURL: 'https://example.com'    # Website's base URL
title: 'My Website'               # Website title
theme: 'hugo-narrow'              # Theme name

# Language settings
languageCode: 'en-US'            # Default language code, used for search engine indexing
defaultContentLanguage: 'en'      # Default content language, determines site display language
defaultContentLanguageInSubdir: false  # Whether default language uses subdirectory

# Timezone setting
timeZone: 'UTC'                  # Timezone setting

# Content processing configuration
hasCJKLanguage: false  # Whether content includes CJK (Chinese, Japanese, Korean) characters
enableEmoji: true      # Enable emoji support

# Pagination configuration
pagination:
  pagerSize: 6       # Number of pages shown in paginator

# URL configuration
permalinks:
  posts: /posts/:year/:month/:slug/  # Post permalink format
  pages: /:slug/                     # Page permalink format

# Taxonomy configuration (no need to modify)
taxonomies:
  category: categories  # Categories
  tag: tags           # Tags
```

## SEO

```yaml
params:
  # Site information for SEO
  description: "Site description"  # Website description for SEO
  keywords: ["keyword1", "keyword2"]  # Website keywords
  defaultAuthor: "Hugo Narrow" # Author
  language: "en-US"
  shortName: "Hugo Narrow"  # PWA

  logo:
    image: "/images/logo.svg"  # Relative path in static directory, leave empty to use site title's first letter with theme color
    link: "/"                  # Click to visit site homepage

  favicon:
    svg: "/favicon.svg"        # SVG format favicon
  
  images: 
    - "/images/og-default.avif"  # Default Open Graph image
```

## Navigation Bar
Supports `true/false`
```yaml
params:
  stickyHeader: true  # Sticky navigation bar
  showThemeSwitch: true      # Whether to show theme color switch button
  showDarkModeSwitch: true   # Whether to show dark mode switch button
  showLanguageSwitch: true   # Whether to show language switch button
```

## Homepage
### Author Info Card
```yaml
params:
  author:
    name: "Hugo Narrow"
    title: "A Clean and Minimal Hugo Theme"
    description: "Focused on content and user experience."
    avatar: "/images/avatar.svg"
    social:
      - name: "GitHub"
        url: "https://github.com/username"
        icon: "github"
      - name: "Twitter"
        url: "https://twitter.com/username"
        icon: "twitter"
      - name: "Email"
        url: "mailto:hello@example.com"
        icon: "email"
```

Place `icon` files in the `~/assets/icons` directory. Add the required `SVG` files and use them with `icon: SVG filename`.

### Recent Posts

Number of recent posts on homepage:

```yaml
params:
  home:
    recentPostsCount: 5
```

## Posts

```yaml
  post:
    showRelated: true           # Related
    relatedPostsCount: 3        # Related posts numbers

    license:
      show: true
      author: Hugo Narrow
      name: "CC BY-NC-SA 4.0"
      description: "This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. Please attribute the source, use non-commercially, and maintain the same license."
      url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
      displayName: "CC BY-NC-SA 4.0"
```

## Output

```yaml
outputs:
  home: ["HTML", "RSS", "JSON", "WebAppManifest"]

# WebManifest
outputFormats:
  WebAppManifest:
    mediaType: "application/manifest+json"
    baseName: "site"
    isPlainText: true
```

## Reading Progress

```yaml
readingProgress:
  enabled: true
  height: 3
  showOnHomepage: false
  smoothScroll: true
  hideOnComplete: false
```

