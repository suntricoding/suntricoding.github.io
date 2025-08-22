# Konfigurasi Galeri

Hugo Narrow mendukung lightbox, gunakan pustaka [GLightbox](https://github.com/biati-digital/glightbox). Tata letak justified juga menggunakan pustaka [lickr-justified-gallery](https://github.com/nk-o/flickr-justified-gallery), dan penulisannya menggunakan markdown.
Tata letak Masonry menggunakan pustaka [Macy.js](https://github.com/bigbite/macy.js), dan penulisannya menggunakan kode pendek.

> [!PENTING]
> Tata letak lightbox dan justified/masonry akan menambahkan sumber daya CSS dan JS tambahan.
>
> Anda dapat mengontrol sakelar lightbox dan Galeri Justified secara terpisah.

## Konfigurasi Dasar

Konfigurasikan fungsionalitas galeri di `hugo.yaml` atau `frontmatter`:

```yaml
params:
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

# Galeri Justified
justified_gallery:
enabled: true
rowHeight: 300
gutter: 30
lastRow: center
transitionDuration: 0,3 detik
resizeDebounce: 100
rowHeightTolerance: 0,25
maxRowsCount: 999999
calculateItemsHeight: false
```

## Galeri Justified

Impor sumber daya gambar secara langsung menggunakan sintaks markdown, dengan satu tautan sumber daya per baris. Kelompok gambar tanpa baris kosong di antaranya dianggap sebagai satu galeri. Contoh di bawah ini menunjukkan dua galeri, yang pertama berisi dua sumber gambar, dan yang kedua berisi tiga sumber gambar.

```markdown
![](images/image01.jpg)
![](images/image02.jpg)

![](images/image03.jpg)
![](images/image04.jpg)
![](images/image05.jpg)
```

## Galeri Masonry

Galeri Masonry menggunakan kode pendek, kunjungi [Shortcodes](../posts/shortcodes#masonry).