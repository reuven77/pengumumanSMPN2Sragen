# Pengumuman Kelulusan Online – SMP Negeri 2 Sidoharjo

Website statis untuk pengumuman kelulusan siswa kelas 9 TA 2025/2026.

## Struktur File

```
kelulusan-smpn2sidoharjo/
├── index.html   ← Halaman utama (profil sekolah + form pencarian + hasil)
├── style.css    ← Tampilan (color palette: putih & hijau)
├── script.js    ← Logika pencarian berdasarkan NISN
├── data.js      ← Data 223 siswa (nama, nisn, nis, status)
└── README.md
```

## Cara Deploy ke Vercel

### Opsi A – Drag & Drop (paling mudah)
1. Buka https://vercel.com dan login (bisa pakai Google)
2. Klik **Add New → Project**
3. Pilih **"Upload"** / drag folder ini ke area deploy
4. Klik **Deploy** → selesai, dapat URL otomatis

### Opsi B – Via GitHub
1. Upload folder ini ke repositori GitHub (baru atau yang sudah ada)
2. Di Vercel: **Add New → Project → Import Git Repository**
3. Pilih repo tersebut → klik **Deploy**
4. Setiap push ke GitHub akan auto-deploy ulang

### Opsi C – Vercel CLI
```bash
npm i -g vercel
cd kelulusan-smpn2sidoharjo
vercel
```

## Pencarian
- User memasukkan **NISN** (angka) → klik "Cek Kelulusan" atau tekan Enter
- Sistem mencari di `data.js` secara client-side (tanpa server, tanpa database)
- Hasil tampil: Nama Lengkap, NISN, NIS, Status Kelulusan

## Update Data
Edit file `data.js` – ubah/tambah objek dalam array `students`.
Format: `{"nama":"...","nisn":"...","nis":"...","status":"LULUS"}`
