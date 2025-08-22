# Skema Warna

Hugo Narrow hadir dengan berbagai skema warna bawaan, mendukung warna khusus, dan memungkinkan peralihan skema warna melalui berkas konfigurasi.

## Konfigurasi Antarmuka Dasar

```yaml
params:
  showThemeSwitch: true # Apakah akan menampilkan pengalih tema (ikon palet)
```

## Konfigurasi Tema

```yaml
params:
  colorScheme: "default"

# Daftar Tema
themes:
  default:
    name: "Default"
    order: 1
  claude:
    name: "Claude"
    order: 2
  bumblebee:
    name: "Bumblebee"
    order: 3
  emerald:
    name: "Emerald"
    order: 4
  nord:
    name: "Nord"
    order: 5
  sunset:
    name: "Sunset"
    order: 6
  abyss:
    name: "Abyss"
    order: 7
  dracula:
    name: "Dracula"
    order: 8
```

## Gaya Tema Kustom

### 1. Membuat Tema Baru

Buat berkas tema baru di Direktori `assets/css/custom/`. Berikut contoh penggunaan skema warna `dracula`:

```css
[data-theme="dracula"] {
    --color-primary: oklch(0.70 0.15 346.812);
    --color-primary-foreground: oklch(0.98 0.007 106.545);
    --color-secondary: oklch(0.68 0.12 301.883);
    --color-secondary-foreground: oklch(0.98 0.007 106.545);
    --color-accent: oklch(0.75 0.10 66.558);
    --color-accent-foreground: oklch(0,20 0,024 66,558);
    --color-background: oklch(0,95 0,01 277,508);
    --color-foreground: oklch(0,30 0,022 277,508);
    --color-muted: oklch(0,90 0,015 277,508);
    --color-muted-foreground: oklch(0,50 0,02 277,508);
    --color-border: oklch(0,82 0,02 277,508);
    --color-card: oklch(0,95 0,01 277,508);
    --color-card-foreground: oklch(0,30 0,022 277,508);
    --color-popover: oklch(0,97 0,005 277,508);
    --color-popover-foreground: oklch(0,30 0,022 277,508);

    --color-note: oklch(0,65 0,15 240);
    --color-tip: oklch(0,70 0,14 160);
    --color-important: oklch(0,70 0,15 346,812);
    --color-warning: oklch(0,75 0,16 85);
    --color-caution: oklch(0,65 0,18 15);
}

[data-theme="dracula"].dark {
    --warna-primer: oklch(0,755 0,183 346,812);
    --warna-primer-latar-depan: oklch(0,151 0,036 346,812);
    --warna-sekunder: oklch(0,742 0,148 301,883);
    --warna-sekunder-latar-depan: oklch(0,148 0,029 301,883);
    --warna-aksen: oklch(0,834 0,124 66,558);
    --warna-aksen-latar-depan: oklch(0,167 0,024 66,558);
    --color-background: oklch(0,288 0,022 277,508);
    --color-foreground: oklch(0,977 0,007 106,545);
    --color-muted: oklch(0,394 0,032 275,524);
    --color-muted-foreground: oklch(0,879 0,006 275,524);
    --color-border: oklch(0,45 0,035 277,508);
    --color-card: oklch(0,32 0,025 277,508);
    --color-card-foreground: oklch(0,977 0,007 106,545);
    --color-popover: oklch(0,394 0,032 275,524);
    --color-popover-foreground: oklch(0,977 0,007 106,545);

    --color-note: oklch(0,70 0,14 240);
    --color-tip: oklch(0,75 0,13 160);
    --color-important: oklch(0,755 0,183 346,812);
    --color-warning: oklch(0,80 0,15 85);
    --color-caution: oklch(0,70 0,17 15);
}
```

### 2. Konfigurasi tema

Tambahkan tema Anda di `hugo.yaml`:

```yaml
params:
  themes:
    dracula:
    name: "dracula"
    order: 9
```

> [!NOTE]
> Anda juga dapat menyesuaikan gaya Anda di `~/assets/css/theme.css` atau `~/assets/css/custom.css`
>
> Anda harus menginstal dependensi: `pnpm add -D tailwindcss @tailwindcss/cli @tailwindcss/typography`
>
> Kemudian kompilasi tailwindcss: `npx tailwindcss -i ./assets/css/main.css -o ./assets/css/compiled.css`
>
> Lihat selengkapnya di [Gaya Kustom](/configration/custom-style)