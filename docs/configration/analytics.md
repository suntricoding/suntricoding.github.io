# Konfigurasi Analitik

Hugo Narrow mendukung alat analitik umum.

## Konfigurasi Dasar

Konfigurasi alat analitik di `hugo.yaml`:

```yaml
params:
  analytics:
    enabled: true # Pengalih utama
```

## Baidu

```yaml
params:
  analytics:
    baidu:
    enabled: true
    id: "your-baidu-analytics-id"
```

## Google Analytics

```yaml
params:
  analytics:
    google:
    enabled: true
    id: "G-XXXXXXXXXX"
```

## Microsoft Clarity

```yaml
params:
  analytics:
    clarity:
    enabled: true
    analytics: "your-clarity-analytics-id"
```

## Konfigurasi Umami Analytics

```yaml
params:
  analytics:
    umami:
    enabled: true
    id: "your-umami-website-id"
    src: "https://umami.com/myscript.js" # URL skrip Umami
    domain: "example.domain.com" # Domain yang akan dilacak
```