# Gaya Kustom

Hugo Narrow mendukung gaya kustom.

## Penggunaan Dasar

Buat berkas CSS dengan nama apa pun di direktori `~/assets/css/custom/` situs dan tulis gaya kustom Anda di dalamnya.

## Penggunaan Kompilasi

### Instal Dependensi

Instal dependensi di direktori root situs:

```javascript
pnpm add -D tailwindcss @tailwindcss/cli @tailwindcss/typography
```

### Gaya Kustom

Ubah atau tambahkan gaya kustom di `~/assets/css/custom.css` atau berkas gaya lainnya.

### Kompilasi

```javascript
npx tailwindcss -i ./assets/css/main.css -o ./assets/css/compiled.css
```