# Setup EmailJS untuk Formulir Kontak

## Langkah Setup EmailJS

### 1. Daftar dan Login ke EmailJS
- Buka https://www.emailjs.com/
- Daftar akun baru atau login jika sudah punya

### 2. Buat Email Service
- Di dashboard EmailJS, klik "Email Services"
- Klik "Add New Service"
- Pilih "Gmail" 
- Hubungkan dengan akun Gmail: dev.prambananlestari@gmail.com
- Beri nama service: "Prambanan Lestari Contact"
- Catat Service ID yang dibuat

### 3. Buat Email Template
- Klik "Email Templates"
- Klik "Create New Template"

- Beri nama template: "Contact Form"
- Catat Template ID yang dibuat

### 4. Ambil Public Key
- Di dashboard EmailJS, klik "Account"
- Catat Public Key Anda

### 5. Update Konfigurasi
- Buka file: `src/utils/emailConfig.js`
- Ganti nilai berikut:
  - `SERVICE_ID`: Ganti dengan Service ID dari langkah 2
  - `TEMPLATE_ID`: Ganti dengan Template ID dari langkah 3  
  - `PUBLIC_KEY`: Ganti dengan Public Key dari langkah 4

### 6. Test Formulir
- Jalankan aplikasi
- Buka halaman kontak
- Isi formulir dan kirim
- Cek email dev.prambananlestari@gmail.com

## Fitur yang Sudah Dibuat

✅ Formulir kontak dengan validasi
✅ Loading state saat mengirim
✅ Pesan status sukses/error
✅ Auto-clear form setelah berhasil kirim
✅ Email dikirim ke dev.prambananlestari@gmail.com
✅ Responsive design

## Troubleshooting

**Jika email tidak terkirim:**
1. Cek console browser untuk error
2. Pastikan Service ID, Template ID, dan Public Key benar
3. Pastikan Gmail service sudah terkoneksi
4. Cek spam folder di email tujuan

**Jika ada error CORS:**
- EmailJS sudah menangani CORS, tidak perlu konfigurasi tambahan

## Security Note
- EmailJS gratis untuk 200 email/bulan
- Untuk volume tinggi, upgrade ke plan berbayar
- Public Key aman untuk digunakan di frontend