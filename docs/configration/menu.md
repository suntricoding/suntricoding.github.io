# Konfigurasi Menu

## Jenis Menu

Hugo Narrow mendukung jenis menu berikut:

1. Main Menu (`main`)
2. Footer Menu (`footer`)
3. Social Links Menu (`social`)

## Main Menu 

```yaml
menus:
  main:
    - name: nav.posts      # Nama Tampilan
      pageRef: /posts      # Referensi halaman
      weight: 20          # Bobot sortir
      params:
        icon: posts       # Nama Icon

    - name: nav.categories
      pageRef: /categories
      weight: 30
      params:
        icon: categories

    - name: nav.tags
      pageRef: /tags
      weight: 40
      params:
        icon: tags

    - name: nav.archives
      pageRef: /archives
      weight: 50
      params:
        icon: archive
```


## Footer Menu

```yaml
menus:
  footer:
    - name: About
      pageRef: /about
      weight: 10
      params:
        icon: about

    - name: Contact
      url: https://example.com/contact  # Menggunakan tautan eksternal
      weight: 20
      params:
        icon: contact

    - name: RSS Feed
      url: /index.xml
      weight: 30
      params:
        icon: rss
```

## Social Links Menu

```yaml
menus:
  social:
    - name: GitHub
      url: https://github.com/username
      weight: 10
      params:
        icon: github

    - name: Twitter
      url: https://twitter.com/username
      weight: 20
      params:
        icon: twitter

    - name: LinkedIn
      url: https://linkedin.com/in/username
      weight: 30
      params:
        icon: linkedin

    - name: Email
      url: mailto:your.email@example.com
      weight: 40
      params:
        icon: email
```

## Parameter Item Menu

Setiap item menu mendukung parameter berikut:

```yaml
- name: "display name"    # Wajib diisi
  pageRef: "/path"        # pageref (Alternatif dengan URL)
  url: "https://..."      # url (Alternatif dengan pageref)
  weight: 10              # boot
  params:
    icon: "icon-name"     # nama berkas icon
```

## Icons

1. **Ikon Bawaan**
Hugo Narrow mendukung ikon umum di `assets/icons/`:
- posts
- categories
- tags
- archive
- about
- rss
- github
- twitter
- linkedin
- email
- etc.

2. **Custom Icons**
   
Unduh ikon Anda dalam format SVG di `assets/icons/`.

Gunakan: `icon: SVG filename`

```
assets/
└── icons/
    ├── custom-icon.svg
    └── another-icon.svg
```

## i18n

use i18n value as menu name:

```yaml
menus:
  main:
    - name: nav.posts
      pageRef: /posts
      weight: 20
```

i18n file(eg: `i18n/zh-cn.yaml`)
```yaml
nav:
  posts: "文章"
  categories: "分类"
  tags: "标签"
  archives: "归档"
```

Anda dapat menetapkan nilai nama sebagai string apa pun: `name: String`.

