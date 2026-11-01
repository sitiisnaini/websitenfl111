# Website Nusantara Future Leaders 2026

Website statis berbasis **HTML, CSS, dan JavaScript murni**. Tidak membutuhkan Node.js, framework, database, atau proses build. Folder ini dapat langsung diunggah ke GitHub Pages, Hostinger, atau layanan hosting statis lainnya.

## Menjalankan website

1. Ekstrak folder `nfl-website` jika Anda mengunduh versi ZIP.
2. Buka `index.html` di browser untuk melihat halaman.
3. Untuk mengedit kode, buka folder ini menggunakan Visual Studio Code.
4. Untuk publikasi, unggah **seluruh isi folder** (termasuk `assets`) ke document root hosting, biasanya `public_html` pada Hostinger.

## Bagian yang mudah diubah

### 1. Tautan pendaftaran
Buka `script.js`, cari objek `NFL_CONFIG` di bagian paling atas, lalu ubah nilai `registrationUrl`. Seluruh tombol Daftar di header, hero, dan bagian pendaftaran menggunakan satu nilai ini.

### 2. Kontak dan tautan sosial media
Pada objek `NFL_CONFIG` di `script.js`, ubah `websiteUrl`, `instagramUrl`, `email`, dan `phone` jika informasi kontak berubah. Semua tautan di footer mengambil nilai dari pengaturan ini.

### 3. Foto dokumentasi dan testimoni
Masih di `script.js`, ubah array `gallery` untuk lima foto dokumentasi. Ubah array `testimonials` untuk foto, nama, status peserta, dan kutipan testimoni. Foto yang sekarang digunakan hanyalah foto ilustrasi sementara, bukan dokumentasi atau testimoni asli NFL.

Gunakan URL foto publik atau simpan foto milik panitia di folder `assets`, lalu tulis path relatif seperti `assets/foto-nfl-01.jpg`.

### 4. Teks halaman
Teks Tentang, Isu, Benefit, Timeline, FAQ, dan Footer bisa langsung diedit di `index.html`. Gunakan pencarian teks di VS Code (Ctrl + F) untuk menemukan judul atau kalimat yang ingin diubah.

### 5. Warna dan tampilan
Buka `style.css`. Warna utama dapat diganti di bagian `:root` paling atas, terutama variabel `--forest`, `--gold`, dan `--cream`. Ukuran, layout, dan animasi diatur di file yang sama.

### 6. Logo
- Logo empat institusi di header: `assets/header-logos.png`
- Logo NFL khusus footer: `assets/logo-nfl.png`

Ganti file tersebut dengan logo baru menggunakan nama file yang sama agar tidak perlu mengubah HTML.

## Struktur folder

```text
nfl-website/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── header-logos.png
    ├── logo-nfl.png
    └── motif-ikat.svg
```

## Catatan

- Font judul dan foto placeholder dimuat dari layanan eksternal (Google Fonts dan Unsplash), sehingga membutuhkan koneksi internet saat halaman dibuka. Jika ingin sepenuhnya offline, unduh font dan foto yang dipilih lalu simpan secara lokal di folder `assets`.
- Tautan website footer saat ini menggunakan `https://www.nflugm.id` berdasarkan alamat yang diberikan. Jika alamat final berbeda, perbarui nilai `websiteUrl` pada objek `NFL_CONFIG` di `script.js`.
- Nomor narahubung menggunakan format internasional `+62` pada tautan WhatsApp, tetapi teks yang tampil tetap `081234567891`.
- Detail FAQ dan testimoni masih berupa contoh awal dan perlu diperbarui dengan informasi resmi panitia.
