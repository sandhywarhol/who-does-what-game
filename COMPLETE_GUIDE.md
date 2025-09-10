# 🚀 PANDUAN LENGKAP: UPLOAD KE GITHUB & DEPLOY KE VERCEL

## 📋 CHECKLIST PERSIAPAN

### ✅ Yang Sudah Disiapkan:
- ✅ `.gitignore` - File yang tidak perlu di-upload
- ✅ `README.md` - Dokumentasi project lengkap
- ✅ `vercel.json` - Konfigurasi Vercel
- ✅ `next.config.js` - Optimasi untuk production
- ✅ `package.json` - Dependencies dan scripts
- ✅ Build test berhasil (128 kB, sangat ringan!)

## 🔧 LANGKAH 1: INSTALL GIT

### Download & Install Git:
1. **Buka:** https://git-scm.com/download/win
2. **Download** Git for Windows
3. **Install** dengan default settings
4. **Restart** Command Prompt/PowerShell

### Verify Installation:
```bash
git --version
```

## 🌐 LANGKAH 2: BUAT AKUN GITHUB

### Jika Belum Punya Akun:
1. **Buka:** https://github.com
2. **Sign Up** dengan email
3. **Verify** email address
4. **Login** ke GitHub

## 📤 LANGKAH 3: UPLOAD KE GITHUB

### Opsi A: Menggunakan Script Batch (Paling Mudah)
```bash
# Setelah Git terinstall, double-click:
upload-to-github.bat
```

### Opsi B: Manual Command
```bash
# 1. Initialize Git repository
git init

# 2. Add semua file
git add .

# 3. Commit perubahan
git commit -m "Initial commit: Who Does What Game - Educational game for kids"

# 4. Buat repository di GitHub.com:
#    - Go to github.com
#    - Click "New repository"
#    - Name: "who-does-what-game"
#    - Description: "Educational game for kids"
#    - Public repository
#    - Don't initialize with README (karena sudah ada)

# 5. Add remote origin (ganti USERNAME dengan username GitHub Anda)
git remote add origin https://github.com/USERNAME/who-does-what-game.git

# 6. Push ke GitHub
git branch -M main
git push -u origin main
```

### Opsi C: GitHub Desktop (User-Friendly)
1. **Download:** https://desktop.github.com/
2. **Install** GitHub Desktop
3. **Login** dengan akun GitHub
4. **File > Add Local Repository**
5. **Publish repository** ke GitHub

## 🚀 LANGKAH 4: DEPLOY KE VERCEL

### Metode 1: Via Vercel Dashboard (RECOMMENDED)

1. **Buka:** https://vercel.com
2. **Sign Up** dengan akun GitHub
3. **Click "New Project"**
4. **Import** repository `who-does-what-game`
5. **Configure project:**
   - Framework: **Next.js** (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
6. **Click "Deploy"**
7. **Tunggu** proses deployment (2-3 menit)
8. **Dapatkan URL** dari dashboard

### Metode 2: Via Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel --prod
```

## 🎯 HASIL AKHIR

### ✅ Yang Akan Anda Dapatkan:

1. **GitHub Repository:**
   - URL: `https://github.com/USERNAME/who-does-what-game`
   - Source code tersimpan dengan aman
   - Version control untuk update

2. **Live Game di Vercel:**
   - URL: `https://who-does-what-game-xxx.vercel.app`
   - Accessible dari mana saja
   - Auto-deploy setiap update

3. **Professional Portfolio:**
   - Project showcase di GitHub
   - Live demo untuk employer/client
   - Documentation lengkap

## 🔄 UPDATE GAME DI MASA DEPAN

### Cara Update:
1. **Edit code** di local
2. **Commit & Push** ke GitHub:
   ```bash
   git add .
   git commit -m "Update: Add new feature"
   git push
   ```
3. **Vercel auto-deploy** dalam 30 detik
4. **Game terupdate** otomatis di web

## 🛠️ TROUBLESHOOTING

### ❌ Git Command Not Found:
- **Install Git** dari https://git-scm.com/
- **Restart** Command Prompt
- **Check PATH** environment variable

### ❌ GitHub Push Error:
```bash
# Check Git configuration
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Check remote URL
git remote -v
```

### ❌ Vercel Deploy Error:
1. **Check Vercel logs** di dashboard
2. **Verify** build lokal: `npm run build`
3. **Check** all files uploaded ke GitHub
4. **Verify** `package.json` scripts

### ❌ Build Error:
```bash
# Test build lokal
npm run build

# Jika error, check:
# 1. Dependencies: npm install
# 2. TypeScript errors
# 3. Import/export syntax
```

## 📱 TESTING FINAL

### ✅ Checklist Testing:
- [ ] Game load di browser
- [ ] Drag & drop berfungsi
- [ ] Audio feedback bekerja
- [ ] Responsive di mobile
- [ ] All 4 levels bisa dimainkan
- [ ] Score system berfungsi
- [ ] Confetti animation smooth

## 🎉 CONGRATULATIONS!

Setelah semua langkah selesai, Anda akan memiliki:

- **🎮 Live Game:** `https://your-app-name.vercel.app`
- **📚 GitHub Repo:** `https://github.com/username/who-does-what-game`
- **🚀 Auto-deploy:** Setiap update otomatis
- **📱 Mobile-friendly:** Bisa dimainkan di HP
- **🌟 Professional:** Portfolio project yang impressive

---

**🎯 Next Steps:**
1. **Share URL** dengan teman/family
2. **Add ke portfolio** LinkedIn/GitHub
3. **Custom domain** (opsional)
4. **Add analytics** untuk tracking

**🎮 Game Anda siap untuk dunia!** ✨
