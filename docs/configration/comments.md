# Konfigurasi Sistem Komentar

Tema Hugo Narrow mendukung beberapa sistem komentar.

## Konfigurasi Dasar

Aktifkan sistem komentar di `hugo.yaml` atau `frontmatter`:

```yaml
params:
  comments:
    enabled: true # Master switch untuk sistem komentar
    system: "giscus" # Pilih sistem komentar: giscus, disqus, utterances, waline, artalk, twikoo
```

Sistem komentar yang didukung:

- [artalk](https://artalk.js.org/)
- [disqus](https://disqus.com/)
- [giscus](https://giscus.app/)
- [twikoo](https://twikoo.js.org/)
- [utterances](https://utteranc.es/)
- [waline](https://waline.js.org/)

Untuk konfigurasi detail, silakan kunjungi dokumentasi sistem masing-masing.

## Artalk

```yaml
params:
  comments:
    system: "artalk"
    artalk:
      server: "your-artalk-server"   # Artalk server address
      site: "your-site-name"         # Site name
      locale: "en"                   # Language
      darkMode: "auto"               # Dark mode
      gravatar:                      # Gravatar settings
        mirror: "https://secure.gravatar.com/avatar/"
```

## Disqus

```yaml
params:
  comments:
    system: "disqus"
    disqus:
      shortname: "your-disqus-shortname"
```


## Giscus

A comment system based on GitHub Discussions.

```yaml
params:
  comments:
    system: "giscus"
    giscus:
      repo: "username/repo"           # GitHub repository
      repoId: "R_xxx"                 # Repository ID
      category: "General"             # Discussion category
      categoryId: "DIC_xxx"           # Category ID
      mapping: "pathname"             # Mapping method
      strict: "0"                     # Strict matching
      reactionsEnabled: "1"           # Enable reactions
      emitMetadata: "0"               # Metadata
      inputPosition: "bottom"         # Input box position
      theme: "preferred_color_scheme" # Theme
      lang: "en"                      # Language
```

### Langkah-Langkah Pengaturan
1. Kunjungi [Aplikasi Giscus](https://github.com/apps/giscus)
2. Instal ke repositori Anda
3. Aktifkan Diskusi di repositori Anda
4. Gunakan [alat konfigurasi Giscus](https://giscus.app/) untuk membuat konfigurasi
5. Salin konfigurasi ke `hugo.yaml`

## Twikoo

```yaml
params:
  comments:
    system: "twikoo"
    twikoo:
      envId: "your-env-id"              # Environment ID
      region: "ap-shanghai"             # Region (optional)
      path: "window.location.pathname"  # Path
      lang: "en"                        # Language
```


## Utterances

A lightweight comment system based on GitHub Issues.

```yaml
params:
  comments:
    system: "utterances"
    utterances:
      repo: "username/repo"             # GitHub repo
      issueTerm: "pathname"             # Issue map
      label: "comment"                  # Issue label
      theme: "preferred-color-scheme"   # theme
```


## Waline

```yaml
params:
  comments:
    system: "waline"
    waline:
      serverURL: "your-waline-server"  # Waline server
      lang: "zh-CN"                    # language
```