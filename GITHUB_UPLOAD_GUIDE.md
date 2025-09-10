# 🚀 CARA UPLOAD KE GITHUB - STEP BY STEP

## 📋 LANGKAH 1: BUAT REPOSITORY DI GITHUB

1. **Buka:** https://github.com
2. **Login** dengan akun GitHub
3. **Click "+"** di pojok kanan atas
4. **Pilih "New repository"**
5. **Isi form:**
   - **Repository name:** `who-does-what-game`
   - **Description:** `Educational game for kids - Who Does What?`
   - **Public** ✅
   - **JANGAN centang** "Add a README file"
   - **JANGAN centang** "Add .gitignore"
6. **Click "Create repository"**

## 📋 LANGKAH 2: DAPATKAN URL REPOSITORY

Setelah repository dibuat, GitHub akan menampilkan halaman dengan URL seperti:
```
https://github.com/USERNAME/who-does-what-game.git
```

**Copy URL ini!**

## 📋 LANGKAH 3: UPLOAD KE GITHUB

### Jalankan commands berikut di terminal:

```bash
# 1. Add remote origin (ganti USERNAME dengan username GitHub Anda)
git remote add origin https://github.com/USERNAME/who-does-what-game.git

# 2. Rename branch ke main
git branch -M main

# 3. Push ke GitHub
git push -u origin main
```

## 🎯 HASIL AKHIR

Setelah berhasil:
- **Repository:** https://github.com/USERNAME/who-does-what-game
- **Source code** tersimpan di GitHub
- **Siap untuk deploy** ke Vercel

## 🚀 LANGKAH 4: DEPLOY KE VERCEL

1. **Buka:** https://vercel.com/dashboard
2. **Click "New Project"**
3. **Import** dari GitHub
4. **Pilih repository** `who-does-what-game`
5. **Deploy** otomatis!

---

**🎮 Game Anda akan live di:** `https://your-app-name.vercel.app`
