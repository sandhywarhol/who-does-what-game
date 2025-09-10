# Panduan Instalasi dan Penggunaan

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```

### 3. Buka Browser
Akses `http://localhost:3000`

## 📦 Dependencies Utama

- **Next.js 14** - React framework dengan SSR
- **TypeScript** - Type safety dan developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **@dnd-kit** - Modern drag & drop library
- **Framer Motion** - Animasi dan transisi
- **Howler.js** - Audio management

## 🎮 Cara Bermain

1. **Lihat Scene**: Perhatikan gambar di bagian atas
2. **Drag Kartu**: Tarik kartu ke slot yang sesuai
3. **Susun Urutan**: Person → Action → Object
4. **Validasi**: Sistem akan mengecek jawaban
5. **Feedback**: Dapatkan animasi dan suara

## 🛠️ Development

### Menambah Level Baru

1. Edit `src/data/levels.ts`
2. Tambahkan level baru dengan struktur:
```typescript
{
  id: 'lvl5',
  sceneImage: '/assets/scenes/new_scene.png',
  sceneEmoji: '🦁🍖',
  correct: ['lion', 'eat', 'meat'],
  description: 'Lion eats meat',
  cards: [
    // 6 kartu: 2 person, 2 action, 2 object
  ]
}
```

### Mengubah Styling

- **Global Styles**: `src/styles/globals.css`
- **Tailwind Config**: `tailwind.config.js`
- **Component Styles**: Gunakan Tailwind classes

### Menambah Audio

1. Tambahkan file audio di `public/assets/sfx/`
2. Update `src/lib/audio.ts` untuk menggunakan file baru

## 📱 Mobile Optimization

- Touch-friendly interface
- Large tap targets (min 44px)
- Responsive design
- Audio controls
- Gesture support

## 🔧 Build & Deploy

### Production Build
```bash
npm run build
npm start
```

### Static Export (Optional)
```bash
npm run build
npm run export
```

## 🐛 Troubleshooting

### Audio Tidak Berfungsi
- Pastikan browser mendukung Web Audio API
- Cek console untuk error
- Gunakan HTTPS untuk production

### Drag & Drop Tidak Responsif
- Pastikan touch events enabled
- Cek CSS pointer-events
- Test di device mobile

### Performance Issues
- Gunakan React DevTools Profiler
- Optimize images
- Lazy load components

## 📊 Analytics & Monitoring

Untuk production, pertimbangkan menambah:
- Google Analytics
- Error tracking (Sentry)
- Performance monitoring
- User behavior analytics

## 🔒 Security

- Input validation
- XSS protection
- CSRF protection
- Content Security Policy

## 🌐 Internationalization

Game saat ini dalam bahasa Indonesia. Untuk menambah bahasa lain:
1. Buat file translation
2. Update text di components
3. Update audio files

## 📈 Performance Tips

- Optimize images (WebP format)
- Use CDN untuk assets
- Implement caching
- Code splitting
- Lazy loading

## 🧪 Testing

Untuk menambah testing:
```bash
npm install --save-dev jest @testing-library/react
```

## 📝 License

Project ini dibuat untuk tujuan edukasi. Silakan gunakan dan modifikasi sesuai kebutuhan.

---

**Happy Coding! 🎉**
