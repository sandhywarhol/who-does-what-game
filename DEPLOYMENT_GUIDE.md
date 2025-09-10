# 🚀 PANDUAN LENGKAP DEPLOYMENT KE VERCEL

## 📋 Persiapan Sebelum Upload

### ✅ Yang Sudah Disiapkan:
- ✅ `.gitignore` - File yang tidak perlu di-upload
- ✅ `README.md` - Dokumentasi project
- ✅ `vercel.json` - Konfigurasi Vercel
- ✅ `next.config.js` - Optimasi untuk production
- ✅ `package.json` - Dependencies dan scripts
- ✅ Build test berhasil

## 🔧 Langkah 1: Upload ke GitHub

### Opsi A: Menggunakan Script Batch (Paling Mudah)
```bash
# Double-click file ini:
upload-to-github.bat
```

### Opsi B: Manual Command
```bash
# 1. Initialize Git (jika belum)
git init

# 2. Add semua file
git add .

# 3. Commit perubahan
git commit -m "Initial commit: Who Does What Game"

# 4. Buat repository di GitHub.com
# 5. Add remote origin
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# 6. Push ke GitHub
git branch -M main
git push -u origin main
```

### Opsi C: Menggunakan GitHub Desktop
1. **Download GitHub Desktop** dari https://desktop.github.com/
2. **Login** dengan akun GitHub
3. **Create new repository** atau **Add existing repository**
4. **Commit & Push** dengan interface yang mudah

## 🌐 Langkah 2: Deploy ke Vercel

### Metode 1: Via Vercel Dashboard (RECOMMENDED)

1. **Buka** [vercel.com](https://vercel.com)
2. **Login** dengan akun GitHub
3. **Click "New Project"**
4. **Import** repository dari GitHub
5. **Configure project:**
   - Framework: **Next.js** (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
6. **Click "Deploy"**
7. **Tunggu** proses deployment selesai
8. **Dapatkan URL** dari dashboard

### Metode 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login ke Vercel
vercel login

# Deploy dari folder project
vercel --prod
```

### Metode 3: Menggunakan Script Batch
```bash
# Double-click file ini:
deploy-simple.bat
```

## 🎯 Setelah Deployment

### ✅ Yang Akan Terjadi:
- **URL Live:** `https://your-app-name.vercel.app`
- **Auto-deploy:** Setiap push ke GitHub akan auto-deploy
- **Custom Domain:** Bisa tambahkan domain sendiri
- **Analytics:** Vercel menyediakan analytics gratis

### 🔄 Update Game:
1. **Edit code** di local
2. **Commit & Push** ke GitHub
3. **Vercel auto-deploy** dalam beberapa detik
4. **Game terupdate** otomatis di web

## 🛠️ Troubleshooting

### ❌ Build Error di Vercel:
```bash
# Test build lokal dulu
npm run build

# Jika error, check:
# 1. Dependencies terinstall
# 2. TypeScript errors
# 3. Import/export syntax
```

### ❌ Git Push Error:
```bash
# Check Git configuration
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Check remote URL
git remote -v
```

### ❌ Vercel Deploy Error:
1. **Check Vercel logs** di dashboard
2. **Verify** `package.json` scripts
3. **Check** Node.js version compatibility
4. **Verify** all dependencies in `package.json`

## 📱 Testing Game

### ✅ Test Checklist:
- [ ] Game load tanpa error
- [ ] Drag & drop berfungsi
- [ ] Audio feedback bekerja
- [ ] Responsive di mobile
- [ ] All levels bisa dimainkan
- [ ] Score system berfungsi

## 🎉 Hasil Akhir

Setelah semua langkah selesai, Anda akan memiliki:

1. **GitHub Repository** dengan source code
2. **Live Game** di Vercel dengan URL publik
3. **Auto-deployment** setiap update
4. **Professional portfolio** project

### 🌟 Bonus Features:
- **Share URL** dengan teman/family
- **Add ke portfolio** GitHub
- **Custom domain** (opsional)
- **Analytics** untuk tracking usage

---

**🎮 Game Anda akan live di:** `https://your-app-name.vercel.app`

**📚 Repository di:** `https://github.com/yourusername/who-does-what-game`
