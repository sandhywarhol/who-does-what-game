# 🚨 SOLUSI: Game Belum Bisa Dimainkan

## 🔍 Masalah yang Ditemukan
Error `ERR_CONNECTION_REFUSED` pada `localhost:3000` menunjukkan bahwa:
1. **Node.js belum terinstall** di sistem Windows Anda
2. **Development server belum berjalan**

## ✅ SOLUSI LANGKAH DEMI LANGKAH

### Step 1: Install Node.js (WAJIB)

#### Cara 1: Download dari Website Resmi
1. **Buka browser** dan kunjungi: https://nodejs.org/
2. **Download versi LTS** (Long Term Support) - biasanya versi terbaru
3. **Jalankan installer** yang sudah didownload
4. **Ikuti wizard instalasi** dengan default settings
5. **Restart Command Prompt/PowerShell** setelah instalasi selesai

#### Cara 2: Menggunakan Chocolatey (Jika sudah ada)
```powershell
# Buka PowerShell sebagai Administrator
choco install nodejs
```

#### Cara 3: Menggunakan Winget (Windows 10/11)
```powershell
# Buka PowerShell sebagai Administrator
winget install OpenJS.NodeJS
```

### Step 2: Verifikasi Instalasi
Setelah install Node.js, buka **Command Prompt baru** dan jalankan:
```bash
node --version
npm --version
```

Jika berhasil, akan muncul versi Node.js dan npm.

### Step 3: Install Dependencies
```bash
# Masuk ke folder project
cd "C:\Users\Rangga\Documents\Cursor\Who Does What"

# Install dependencies
npm install
```

### Step 4: Jalankan Development Server
```bash
npm run dev
```

### Step 5: Buka Browser
Setelah server berjalan, buka browser dan akses:
```
http://localhost:3000
```

## 🔧 TROUBLESHOOTING

### Jika masih error setelah install Node.js:

#### 1. Restart Terminal
- Tutup semua Command Prompt/PowerShell
- Buka Command Prompt baru
- Coba lagi

#### 2. Cek PATH Environment Variable
```bash
echo $env:PATH
```
Pastikan ada path ke Node.js (biasanya `C:\Program Files\nodejs\`)

#### 3. Install ulang dengan Administrator
- Klik kanan pada Command Prompt
- Pilih "Run as Administrator"
- Jalankan instalasi lagi

#### 4. Gunakan Yarn sebagai alternatif
```bash
# Install yarn global
npm install -g yarn

# Install dependencies dengan yarn
yarn install

# Jalankan dengan yarn
yarn dev
```

## 🚀 ALTERNATIF: Gunakan Online Editor

Jika masih kesulitan install Node.js, Anda bisa:

### 1. CodeSandbox
- Buka https://codesandbox.io/
- Upload file-file project
- Jalankan online

### 2. StackBlitz
- Buka https://stackblitz.com/
- Import project dari GitHub
- Jalankan online

### 3. Replit
- Buka https://replit.com/
- Create new project
- Upload file-file

## 📱 TESTING DI MOBILE

Setelah server berjalan, untuk test di mobile:

### 1. Cari IP Address Komputer
```bash
ipconfig
```
Cari IPv4 Address (contoh: 192.168.1.100)

### 2. Jalankan dengan Host 0.0.0.0
```bash
npm run dev -- -H 0.0.0.0
```

### 3. Akses dari Mobile
```
http://192.168.1.100:3000
```

## 🎯 QUICK FIX

Jika ingin cepat, ikuti langkah ini:

1. **Download Node.js** dari https://nodejs.org/
2. **Install dengan default settings**
3. **Restart komputer**
4. **Buka Command Prompt baru**
5. **Jalankan:**
   ```bash
   cd "C:\Users\Rangga\Documents\Cursor\Who Does What"
   npm install
   npm run dev
   ```
6. **Buka browser ke http://localhost:3000**

## 📞 BANTUAN TAMBAHAN

Jika masih mengalami masalah:

1. **Screenshot error** yang muncul
2. **Cek versi Windows** (Windows 10/11)
3. **Cek antivirus** yang mungkin memblokir
4. **Coba disable firewall** sementara
5. **Restart router** jika ada masalah jaringan

## 🎉 SETELAH BERHASIL

Setelah game bisa berjalan, Anda akan melihat:
- Interface game yang colorful
- Scene dengan emoji
- Kartu-kartu yang bisa di-drag
- Slot untuk jawaban
- Audio feedback

**Selamat bermain! 🎮**
