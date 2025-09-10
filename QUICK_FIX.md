# 🚨 GAME BELUM BISA DIMAINKAN? IKUTI LANGKAH INI!

## ❌ Masalah: ERR_CONNECTION_REFUSED
Error ini terjadi karena **Node.js belum terinstall** di komputer Anda.

## ✅ SOLUSI CEPAT:

### 1. Install Node.js
- **Buka browser** → https://nodejs.org/
- **Download** versi LTS (yang hijau)
- **Install** dengan klik Next-Next-Finish
- **Restart** Command Prompt/PowerShell

### 2. Jalankan Game
**Pilih salah satu cara:**

#### Cara A: Double-click file `start-game.bat`
- Klik 2x pada file `start-game.bat`
- Script akan otomatis install dan jalankan game

#### Cara B: Manual di Command Prompt
```bash
npm install
npm run dev
```

#### Cara C: PowerShell (Recommended)
```powershell
# Klik kanan pada start-game.ps1
# Pilih "Run with PowerShell"
```

### 3. Buka Browser
- Buka browser
- Ketik: `http://localhost:3000`
- Game siap dimainkan! 🎮

## 🔧 Jika Masih Error:

### Error: 'node' is not recognized
**Solusi:** Install Node.js dari https://nodejs.org/

### Error: npm install failed
**Solusi:** 
- Cek internet connection
- Restart router
- Coba lagi

### Error: Port 3000 already in use
**Solusi:**
```bash
npx kill-port 3000
npm run dev
```

### Error: Permission denied
**Solusi:**
- Buka Command Prompt sebagai Administrator
- Atau gunakan PowerShell

## 📱 Test di Mobile:

1. **Cari IP komputer:**
   ```bash
   ipconfig
   ```
   Cari IPv4 Address (contoh: 192.168.1.100)

2. **Jalankan dengan host 0.0.0.0:**
   ```bash
   npm run dev -- -H 0.0.0.0
   ```

3. **Akses dari mobile:**
   ```
   http://192.168.1.100:3000
   ```

## 🎯 Quick Fix (5 Menit):

1. **Download Node.js** → https://nodejs.org/
2. **Install** dengan default settings
3. **Restart komputer**
4. **Double-click** `start-game.bat`
5. **Buka browser** → `http://localhost:3000`

## 📞 Masih Bermasalah?

1. **Screenshot error** yang muncul
2. **Cek versi Windows** (10/11)
3. **Disable antivirus** sementara
4. **Restart router**
5. **Coba browser lain** (Chrome/Firefox)

## 🎉 Setelah Berhasil:

Anda akan melihat:
- ✅ Interface game yang colorful
- ✅ Scene dengan emoji
- ✅ Kartu yang bisa di-drag
- ✅ Slot untuk jawaban
- ✅ Audio feedback

**Selamat bermain! 🎮**
