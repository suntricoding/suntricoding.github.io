# Panduan Kustomisasi Tema

Dokumen ini menjelaskan cara memodifikasi dan mengkustomisasi tema Hugo Narrow.

## Menggunakan Submodul Git

Saat Anda menambahkan tema menggunakan `git submodule`, salin berkas tema yang ingin Anda modifikasi ke jalur yang sama di direktori root situs Anda dan tentukan modifikasi Anda di sana.

Dengan metode ini, Anda **tidak dapat** melakukan komit perubahan ke GitHub.

Jika Anda ingin menyimpan modifikasi Anda ke repositori GitHub, Anda dapat melakukan forking tema tersebut lalu mengganti alamat `git submodule` dengan alamat repositori Anda.

## Metode Unduhan Langsung
Saat Anda mengunduh berkas tema langsung ke direktori situs Anda, Anda dapat memodifikasi berkas tema secara langsung. Kekurangannya adalah setiap pembaruan memerlukan perbandingan manual perubahan tema, sehingga menyulitkan pemutakhiran.