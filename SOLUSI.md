# 🚨 GAME BELUM BISA DIMAINKAN?

## ❌ Masalah: ERR_CONNECTION_REFUSED
**Penyebab:** Node.js belum terinstall di komputer Anda.

## ✅ SOLUSI (5 Menit):

### Step 1: Install Node.js
1. **Buka browser** → https://nodejs.org/
2. **Download** versi LTS (tombol hijau)
3. **Install** dengan klik Next-Next-Finish
4. **Restart** Command Prompt

### Step 2: Jalankan Game
**Double-click file `setup-game.bat`**
- Script akan otomatis install dan jalankan game
- Atau jalankan manual:
```bash
npm install
npm run dev
```

### Step 3: Buka Browser
- Buka browser
- Ketik: `http://localhost:3000`
- **Game siap dimainkan! 🎮**

## 🔧 Jika Masih Error:

| Error | Solusi |
|-------|--------|
| 'node' is not recognized | Install Node.js dari https://nodejs.org/ |
| npm install failed | Cek internet, restart router |
| Port 3000 in use | Jalankan `npx kill-port 3000` |
| Permission denied | Buka Command Prompt sebagai Administrator |

## 📱 Test di Mobile:
1. Jalankan: `npm run dev -- -H 0.0.0.0`
2. Cari IP komputer: `ipconfig`
3. Akses: `http://[IP-KOMPUTER]:3000`

## 🎯 Quick Fix:
1. **Download Node.js** → https://nodejs.org/
2. **Install** dengan default settings
3. **Double-click** `setup-game.bat`
4. **Buka browser** → `http://localhost:3000`

## 🎉 Setelah Berhasil:
- ✅ Interface game colorful
- ✅ Scene dengan emoji
- ✅ Kartu bisa di-drag
- ✅ Slot untuk jawaban
- ✅ Audio feedback

**Selamat bermain! 🎮**
