# Instalasi dan Setup Project

## 📋 Prerequisites

Sebelum menjalankan project ini, pastikan sudah terinstall:

### 1. Node.js (Wajib)
- Download dari: https://nodejs.org/
- Pilih versi LTS (Long Term Support)
- Versi minimal: Node.js 18+
- npm akan terinstall otomatis bersama Node.js

### 2. Git (Opsional)
- Download dari: https://git-scm.com/
- Untuk version control

## 🚀 Cara Instalasi

### Step 1: Install Node.js
1. Kunjungi https://nodejs.org/
2. Download versi LTS
3. Install dengan default settings
4. Restart terminal/command prompt

### Step 2: Verifikasi Instalasi
```bash
node --version
npm --version
```

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Jalankan Development Server
```bash
npm run dev
```

### Step 5: Buka Browser
Akses `http://localhost:3000`

## 🛠️ Alternative Package Managers

Jika ingin menggunakan package manager lain:

### Yarn
```bash
# Install yarn
npm install -g yarn

# Install dependencies
yarn install

# Run dev server
yarn dev
```

### pnpm
```bash
# Install pnpm
npm install -g pnpm

# Install dependencies
pnpm install

# Run dev server
pnpm dev
```

## 🔧 Troubleshooting

### Error: 'npm' is not recognized
**Solusi**: 
1. Install Node.js dari https://nodejs.org/
2. Restart terminal
3. Cek PATH environment variable

### Error: Permission denied
**Solusi**:
```bash
# Windows (PowerShell as Administrator)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Atau gunakan yarn/pnpm
```

### Error: Port 3000 already in use
**Solusi**:
```bash
# Kill process di port 3000
npx kill-port 3000

# Atau gunakan port lain
npm run dev -- -p 3001
```

### Error: Module not found
**Solusi**:
```bash
# Clear cache dan reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📱 Testing di Mobile

### Local Network Access
```bash
# Jalankan dengan host 0.0.0.0
npm run dev -- -H 0.0.0.0

# Akses dari mobile dengan IP komputer
# Contoh: http://192.168.1.100:3000
```

### Mobile Testing Tools
- Chrome DevTools Device Mode
- BrowserStack
- Real device testing

## 🚀 Production Deployment

### Build untuk Production
```bash
npm run build
npm start
```

### Deploy ke Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy ke Netlify
```bash
# Build
npm run build

# Upload folder 'out' ke Netlify
```

## 📊 Performance Monitoring

### Bundle Analyzer
```bash
npm install --save-dev @next/bundle-analyzer
```

### Lighthouse Audit
- Buka Chrome DevTools
- Tab Lighthouse
- Run audit

## 🔒 Security Checklist

- [ ] Update dependencies secara berkala
- [ ] Gunakan HTTPS di production
- [ ] Implement Content Security Policy
- [ ] Validasi semua input
- [ ] Gunakan environment variables untuk secrets

## 📈 Optimization Tips

1. **Images**: Gunakan format WebP, optimize size
2. **Fonts**: Preload font yang penting
3. **Code Splitting**: Lazy load components
4. **Caching**: Implement proper caching strategy
5. **CDN**: Gunakan CDN untuk static assets

## 🧪 Testing

### Unit Testing
```bash
npm install --save-dev jest @testing-library/react
npm test
```

### E2E Testing
```bash
npm install --save-dev playwright
npx playwright test
```

## 📝 Development Workflow

1. **Fork** repository
2. **Clone** ke local
3. **Create** branch untuk fitur baru
4. **Develop** dan test
5. **Commit** perubahan
6. **Push** ke branch
7. **Create** Pull Request

## 🤝 Contributing

- Follow coding standards
- Write tests untuk fitur baru
- Update dokumentasi
- Use conventional commits

## 📞 Support

Jika mengalami masalah:
1. Cek dokumentasi ini
2. Cari di GitHub Issues
3. Buat issue baru dengan detail error
4. Sertakan log error dan environment info

---

**Happy Coding! 🎉**
