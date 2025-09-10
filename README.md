# 🎮 Who Does What? - Game Edukasi Anak

Game edukasi interaktif untuk anak usia 3-4 tahun yang mengajarkan susunan kalimat dengan cara yang menyenangkan!

## 🎯 Fitur Game

- **Drag & Drop Interface** - Mudah digunakan untuk anak-anak
- **Visual Learning** - Menggunakan emoji dan gambar yang menarik
- **Audio Feedback** - Suara untuk setiap aksi (success, error, drop)
- **Progressive Levels** - 4 level dengan tingkat kesulitan bertahap
- **Responsive Design** - Bisa dimainkan di desktop dan mobile
- **Score System** - Sistem poin dan lives untuk motivasi

## 🚀 Demo Live

**Mainkan game di:** [https://who-does-what-game.vercel.app](https://who-does-what-game.vercel.app)

## 🎮 Cara Bermain

1. **Lihat gambar** di atas untuk memahami adegan
2. **Drag kartu** ke slot yang sesuai:
   - **Who?** - Siapa yang melakukan aksi
   - **Does What?** - Apa yang dilakukan
   - **With What?** - Dengan apa
3. **Susun kalimat** yang benar untuk menyelesaikan level
4. **Dapatkan poin** dan lanjut ke level berikutnya!

## 🛠️ Teknologi yang Digunakan

- **Next.js 14** - React framework untuk web
- **TypeScript** - Type safety dan better development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animasi yang smooth
- **@dnd-kit** - Drag and drop functionality
- **Howler.js** - Audio management
- **Vercel** - Hosting dan deployment

## 📦 Instalasi Lokal

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Langkah-langkah

1. **Clone repository**
   ```bash
   git clone https://github.com/yourusername/who-does-what-game.git
   cd who-does-what-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Buka browser** dan kunjungi `http://localhost:3000`

## 🚀 Deployment ke Vercel

### Opsi 1: Via Vercel Dashboard (Paling Mudah)
1. **Fork repository** ini ke GitHub Anda
2. **Buka** [vercel.com](https://vercel.com)
3. **Login** dengan GitHub
4. **Import project** dari GitHub
5. **Deploy** otomatis!

### Opsi 2: Via Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel --prod
```

## 📁 Struktur Project

```
src/
├── components/          # React components
│   ├── AnswerBar.tsx   # Answer slots
│   ├── Card.tsx        # Draggable cards
│   ├── Confetti.tsx    # Success animation
│   ├── HUD.tsx         # Game interface
│   └── SceneView.tsx   # Scene display
├── data/
│   └── levels.ts       # Game levels data
├── lib/
│   └── audio.ts        # Audio management
├── pages/
│   ├── _app.tsx        # App wrapper
│   └── index.tsx       # Main game page
└── styles/
    └── globals.css     # Global styles
```

## 🎨 Customization

### Menambah Level Baru
Edit file `src/data/levels.ts`:

```typescript
{
  id: 'lvl5',
  sceneImage: '/assets/scenes/new_scene.png',
  sceneEmoji: '🦁🏃',
  correct: ['lion', 'run', 'field'],
  description: 'Lion runs in field',
  cards: [
    // Tambahkan kartu-kartu baru
  ]
}
```

### Mengubah Styling
Edit file `src/styles/globals.css` atau gunakan Tailwind classes.

## 🤝 Contributing

1. **Fork** repository ini
2. **Create branch** untuk fitur baru (`git checkout -b feature/AmazingFeature`)
3. **Commit** perubahan (`git commit -m 'Add some AmazingFeature'`)
4. **Push** ke branch (`git push origin feature/AmazingFeature`)
5. **Open Pull Request**

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Author

**Rangga** - [GitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Emoji icons dari Unicode
- Sound effects menggunakan Web Audio API
- Inspiration dari game edukasi anak-anak

---

**⭐ Jika game ini membantu, jangan lupa berikan star!**