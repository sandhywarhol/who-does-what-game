# Folder Asset Ilustrasi Game

## Struktur Folder

```
illustrations/
├── questions/          # Gambar ilustrasi untuk soal
│   ├── level1/        # Gambar soal untuk level 1
│   ├── level2/        # Gambar soal untuk level 2
│   └── ...
├── answers/           # Gambar ilustrasi untuk jawaban
│   ├── level1/        # Gambar jawaban untuk level 1
│   ├── level2/        # Gambar jawaban untuk level 2
│   └── ...
└── README.md          # File ini
```

## Format Gambar yang Disarankan

- **Format**: PNG atau JPG
- **Ukuran**: 200x200px untuk jawaban, 400x300px untuk soal
- **Nama file**: 
  - Soal: `question_[level]_[nomor].png`
  - Jawaban: `answer_[level]_[nomor].png`

## Contoh Penamaan File

### Level 1
- `questions/level1/question_1_1.png` - Gambar soal level 1, nomor 1
- `answers/level1/answer_1_1.png` - Gambar jawaban level 1, nomor 1

### Level 2
- `questions/level2/question_2_1.png` - Gambar soal level 2, nomor 1
- `answers/level2/answer_2_1.png` - Gambar jawaban level 2, nomor 1

## Cara Upload Asset

1. Buat folder level jika belum ada (misal: `level1`, `level2`)
2. Upload gambar dengan nama sesuai konvensi
3. Pastikan ukuran gambar sesuai rekomendasi
4. Test game untuk memastikan gambar tampil dengan benar

## Catatan

- Gambar akan otomatis di-resize oleh CSS
- Pastikan gambar memiliki kontras yang baik
- Gunakan format PNG untuk gambar dengan transparansi
- Gunakan format JPG untuk foto atau gambar kompleks
