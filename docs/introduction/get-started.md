# Memulai

Panduan ini akan membantu Anda mengatur dan menggunakan tema Hugo Narrow dengan cepat.

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal yang berikut di sistem Anda:

- [Git](https://git-scm.com/)
- [Hugo Extended](https://gohugo.io/installation/) (Diperlukan versi Extended, versi 0.146 atau lebih tinggi)

## Instalasi

### Buat Situs Hugo Baru

```bash
hugo new site myblog
cd myblog
git init
```

### Tambahkan Tema

Ada dua cara untuk menambahkan tema:

#### Opsi 1: Menggunakan Submodul Git (Disarankan)

```bash
git submodule add https://github.com/tom2almighty/hugo-narrow.git themes/hugo-narrow
# Perbarui submodul
git submodule update --init --recursive --remote
```

#### Opsi 2: Unduh Langsung

Kunjungi [halaman Rilis Hugo Narrow](https://github.com/tom2almighty/hugo-narrow/releases) untuk mengunduh versi terbaru dan mengekstraknya ke direktori `themes/hugo-narrow`.

### Konfigurasi Tema

Salin berkas konfigurasi contoh:
```bash
cp -r themes/hugo-narrow/exampleSite/* .
```

Ubah berkas konfigurasi `hugo.yaml`:
```yaml
tema: hugo-narrow
baseURL: 'https://example.com' # Ubah ke URL situs web Anda
judul: 'Blog Saya' # Ubah ke judul situs web Anda
```

### Buat Konten

Buat postingan baru:
```bash
hugo new posts/my-first-post.md
```

Edit halaman depan:
```yaml
---
judul: "Postingan Pertama Saya"
tanggal: 13-06-2025
draft: false
kategori: ["Blog"]
tag: ["Hugo", "Tutorial"]
---
```

### Pratinjau Lokal

Jalankan server pengembangan:
```bash
hugo server -D
```

Anda sekarang dapat mengunjungi `http://localhost:1313` di peramban Anda untuk melihat situs web Anda.

## Penerapan Online (Vercel)

Buat `vercel.json` di direktori root situs:

```json
{
"build": {
"env": {
"HUGO_VERSION": "0.146.0"
}
},
"buildCommand": "hugo --minify --gc"
}
```