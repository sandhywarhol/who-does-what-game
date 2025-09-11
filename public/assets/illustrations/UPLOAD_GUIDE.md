# 📁 Panduan Upload Asset Ilustrasi Game

## 🎯 Struktur Folder yang Sudah Dibuat

```
public/assets/illustrations/
├── questions/              # Gambar ilustrasi untuk soal/scene
│   ├── level1/            # Level 1 - Boy eats apple
│   ├── level2/            # Level 2 - Girl reads book  
│   ├── level3/            # Level 3 - Cat plays ball
│   └── level4/            # Level 4 - Dog sleeps on bed
├── answers/               # Gambar ilustrasi untuk jawaban/cards
│   ├── level1/            # Jawaban untuk level 1
│   ├── level2/            # Jawaban untuk level 2
│   ├── level3/            # Jawaban untuk level 3
│   └── level4/            # Jawaban untuk level 4
└── README.md              # Panduan ini
```

## 📋 File yang Dibutuhkan untuk Setiap Level

### Level 1 - Boy eats apple
**Folder:** `questions/level1/`
- `question_1_1.png` - Ilustrasi scene "Boy eats apple"

**Folder:** `answers/level1/`
- `answer_1_boy.png` - Gambar anak laki-laki
- `answer_1_girl.png` - Gambar anak perempuan
- `answer_1_eat.png` - Gambar aksi makan
- `answer_1_read.png` - Gambar aksi membaca
- `answer_1_apple.png` - Gambar apel
- `answer_1_book.png` - Gambar buku

### Level 2 - Girl reads book
**Folder:** `questions/level2/`
- `question_2_1.png` - Ilustrasi scene "Girl reads book"

**Folder:** `answers/level2/`
- `answer_2_boy.png` - Gambar anak laki-laki
- `answer_2_girl.png` - Gambar anak perempuan
- `answer_2_eat.png` - Gambar aksi makan
- `answer_2_read.png` - Gambar aksi membaca
- `answer_2_apple.png` - Gambar apel
- `answer_2_book.png` - Gambar buku

### Level 3 - Cat plays ball
**Folder:** `questions/level3/`
- `question_3_1.png` - Ilustrasi scene "Cat plays ball"

**Folder:** `answers/level3/`
- `answer_3_cat.png` - Gambar kucing
- `answer_3_dog.png` - Gambar anjing
- `answer_3_play.png` - Gambar aksi bermain
- `answer_3_sleep.png` - Gambar aksi tidur
- `answer_3_ball.png` - Gambar bola
- `answer_3_bed.png` - Gambar tempat tidur

### Level 4 - Dog sleeps on bed
**Folder:** `questions/level4/`
- `question_4_1.png` - Ilustrasi scene "Dog sleeps on bed"

**Folder:** `answers/level4/`
- `answer_4_cat.png` - Gambar kucing
- `answer_4_dog.png` - Gambar anjing
- `answer_4_play.png` - Gambar aksi bermain
- `answer_4_sleep.png` - Gambar aksi tidur
- `answer_4_ball.png` - Gambar bola
- `answer_4_bed.png` - Gambar tempat tidur

## 🎨 Spesifikasi Gambar

### Gambar Soal (Scene)
- **Ukuran:** 400x300px
- **Format:** PNG atau JPG
- **Konten:** Ilustrasi scene yang menunjukkan aktivitas yang harus ditebak
- **Style:** Konsisten dengan tema game

### Gambar Jawaban (Cards)
- **Ukuran:** 200x200px
- **Format:** PNG atau JPG
- **Konten:** Gambar individual untuk setiap elemen
- **Background:** Transparan atau solid color yang konsisten

## 💡 Tips Desain

### Untuk Gambar Soal (Scene)
- Gunakan warna yang cerah dan menarik
- Pastikan scene mudah dipahami oleh anak-anak
- Hindari detail yang terlalu rumit
- Fokus pada aktivitas utama yang harus ditebak

### Untuk Gambar Jawaban (Cards)
- Gunakan style yang konsisten untuk semua gambar dalam level yang sama
- Pastikan gambar mudah dikenali oleh anak-anak
- Gunakan warna yang cerah dan kontras yang baik
- Hindari detail yang terlalu rumit

## 🔄 Cara Upload Asset

1. **Siapkan gambar** sesuai spesifikasi di atas
2. **Simpan dengan nama file** yang sesuai dengan contoh
3. **Upload ke folder** yang sesuai (questions/levelX atau answers/levelX)
4. **Test game** untuk memastikan gambar tampil dengan benar

## ⚠️ Catatan Penting

- Game akan otomatis fallback ke emoji jika gambar tidak ditemukan
- Pastikan nama file sesuai dengan yang sudah dikonfigurasi
- Gambar akan otomatis di-resize oleh CSS
- Gunakan format PNG untuk gambar dengan transparansi
- Gunakan format JPG untuk foto atau gambar kompleks

## 🚀 Setelah Upload

1. Refresh browser untuk melihat perubahan
2. Test semua level untuk memastikan gambar tampil dengan benar
3. Periksa apakah fallback ke emoji masih berfungsi jika ada gambar yang error

## 📞 Bantuan

Jika ada masalah dengan upload atau tampilan gambar, pastikan:
- Nama file sesuai dengan yang dikonfigurasi
- Format gambar didukung (PNG/JPG)
- Ukuran file tidak terlalu besar
- Path folder sudah benar
