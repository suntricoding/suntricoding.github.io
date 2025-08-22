# Konfigurasi Blok Kode

Hugo Narrow mendukung penyorotan kode dan meningkatkan fungsionalitas blok kode, termasuk:

- Tampilan bahasa
- Penyalinan kode
- Penciutan blok kode

## Konfigurasi Blok Kode Dasar

Konfigurasi gaya blok kode di `hugo.yaml`:

```yaml
markup:
  highlight:
    codeFences: true # Aktifkan pagar kode
    guesSyntax: true # Deteksi bahasa otomatis
    lineNos: true # Tampilkan nomor baris
    lineNumbersInTable: false # Gunakan nomor baris bergaya tabel, atur ke false untuk kompatibilitas tema
    noClasses: false # Gunakan kelas CSS, bukan gaya sebaris
    style: "monokai" # Tema penyorotan kode (pengaturan di sini tidak berpengaruh, detailnya di bawah)
    tabWidth: 4 # Lebar tab
```

## Gaya Penyorotan Kode

Tema ini menggunakan chroma untuk penyorotan kode, dengan gaya github dan github-dark untuk mode terang dan gelap.

Untuk kompatibilitas tema yang lebih baik, tema ini membuat berkas gaya menggunakan `hugo gen chromastyles --style=github > ./assets/css/github.css` dan mengadaptasinya ke tema.

### Penyorotan Kode Kustom

Memodifikasi gaya sorotan juga memerlukan pembuatan gaya melalui perintah.

```bash
# Lihat semua gaya
hugo gen chromastyles --help

# Hasilkan berkas gaya
hugo gen chromastyles --style=github > ./github.css
hugo gen chromastyles --style=github-dark > ./github-dark.css
```
Setelah selesai, ganti variabel tema yang sesuai, colors, di `~/assets/css/chroma.css`.

Anda juga dapat mengganti nama variabel sorotan yang sesuai dengan warna kustom.

## Peningkatan Blok Kode

Konfigurasi di `hugo.yaml`:

```yaml
codeblock:
  collapse:
    enabled: true
    defaultState: expanded # Perilaku penciutan default: expanded, collapsed
    autoCollapseLines: 30 # Ciutkan ketika melebihi baris yang ditentukan
    autoCollapseHeight: 400 # Ciutkan ketika melebihi tinggi yang ditentukan
    collapsedHeight: 120 # Tinggi ketika diciutkan
```