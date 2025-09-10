# 🚀 INSTALASI YANG DIPERLUKAN UNTUK DEPLOY KE VERCEL

## ✅ Status Saat Ini:
- ✅ **Node.js & npm** - Sudah terinstall (versi 24.7.0)
- ✅ **Akun Vercel** - Sudah login
- ❌ **Git** - Belum terinstall
- ❌ **Vercel CLI** - Belum terinstall

## 🔧 LANGKAH 1: INSTALL GIT

### Download Git:
1. **Buka:** https://git-scm.com/download/win
2. **Download** "Git for Windows"
3. **Run installer** dengan default settings
4. **Restart** Command Prompt/PowerShell

### Verify Installation:
```bash
git --version
```

## 📦 LANGKAH 2: INSTALL VERCEL CLI

### Install via npm:
```bash
npm install -g vercel
```

### Verify Installation:
```bash
vercel --version
```

## 🎯 LANGKAH 3: DEPLOY KE VERCEL

### Opsi A: Via Vercel Dashboard (PALING MUDAH)
1. **Buka:** https://vercel.com/dashboard
2. **Click "New Project"**
3. **Import** dari GitHub (setelah upload)
4. **Deploy** otomatis!

### Opsi B: Via Vercel CLI
```bash
# Login ke Vercel
vercel login

# Deploy project
vercel --prod
```

## 📤 LANGKAH 4: UPLOAD KE GITHUB

### Setelah Git terinstall:
```bash
# Initialize repository
git init

# Add files
git add .

# Commit
git commit -m "Initial commit: Who Does What Game"

# Buat repository di GitHub.com
# Add remote & push
git remote add origin https://github.com/USERNAME/who-does-what-game.git
git branch -M main
git push -u origin main
```

## 🎉 HASIL AKHIR

Setelah semua terinstall:
- **🎮 Live Game:** `https://your-app-name.vercel.app`
- **📚 GitHub Repo:** `https://github.com/username/who-does-what-game`
- **🔄 Auto-deploy:** Setiap update otomatis

---

**🚀 Ready to deploy!** ✨
