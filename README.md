# 🎓 K3 Pelatihan - Geo Mandiri Group

Website pelatihan K3 berbasis React + Vite dengan auto-deploy ke GitHub Pages.

## 🚀 Setup & Deploy ke GitHub Pages

### Langkah 1 — Edit nama repo di vite.config.js
Buka `vite.config.js`, ganti `k3-pelatihan` dengan nama repository GitHub kamu:
```js
base: '/NAMA-REPO-KAMU/',
```

### Langkah 2 — Upload ke GitHub
1. Buat repository baru di GitHub (nama harus sama dengan base di vite.config.js)
2. Upload **semua file** ke repository tersebut

### Langkah 3 — Aktifkan GitHub Pages via Actions
1. Buka repository → **Settings** → **Pages**
2. Di bagian **Source**, pilih: **GitHub Actions**
3. Save

### Langkah 4 — Trigger deploy
Setiap kali kamu **push/upload** file ke branch `main`, GitHub otomatis:
- Install dependencies
- Build React
- Deploy ke GitHub Pages ✅

URL website: `https://USERNAME.github.io/NAMA-REPO/`

---

## ✏️ Cara Edit Konten

### Ubah data pelatihan
Edit file `src/data.js`

### Ubah warna / design
Edit file `src/App.jsx` bagian `<style>`

### Ubah link tombol Daftar
Edit file `src/App.jsx` baris:
```js
const DAFTAR_URL = 'https://www.geomandiri.co.id/jadwal-training/2026.html'
```

Setiap kali save dan push, website otomatis update! 🎉
