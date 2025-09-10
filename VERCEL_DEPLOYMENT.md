# Who Does What Game - README for Vercel Deployment

## 🚀 Deployment ke Vercel

### Langkah-langkah Deployment:

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login ke Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy aplikasi:**
   ```bash
   vercel --prod
   ```

### Atau gunakan script batch:
```bash
# Double-click file ini:
deploy-to-vercel.bat
```

### Konfigurasi yang sudah disiapkan:

- ✅ `vercel.json` - Konfigurasi deployment
- ✅ `next.config.js` - Optimasi untuk production
- ✅ `package.json` - Script dan engine requirements
- ✅ Build script untuk Vercel

### Setelah deployment:

1. **Dapatkan URL** dari Vercel dashboard
2. **Share URL** dengan format: `https://your-app-name.vercel.app`
3. **Game akan accessible** dari mana saja di internet

### Fitur yang sudah dioptimasi untuk web:

- ✅ Responsive design
- ✅ Fast loading
- ✅ Optimized animations
- ✅ Fallback audio (tidak perlu file audio)
- ✅ SEO friendly

### Troubleshooting:

Jika ada masalah deployment:
1. Check Vercel dashboard untuk error logs
2. Pastikan semua dependencies terinstall
3. Build lokal dulu: `npm run build`
4. Check `vercel.json` configuration

---
**Game akan berjalan di:** `https://your-app-name.vercel.app`
