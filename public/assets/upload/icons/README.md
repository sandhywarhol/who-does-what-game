# 📁 Custom Icons Upload Guide

## 🎯 Struktur Folder Icons:

```
public/assets/upload/icons/
├── persons/              # Icon untuk person (orang/hewan)
│   ├── boy.png
│   ├── girl.png
│   ├── baby.png
│   ├── mommy.png
│   ├── papa.png
│   ├── aunty.png
│   ├── grandpa.png
│   ├── cat.png
│   └── dog.png
├── actions/              # Icon untuk action (kata kerja)
│   ├── eats.png
│   ├── drinks.png
│   ├── claps.png
│   ├── brushes.png
│   ├── kicks.png
│   ├── plays.png
│   ├── draws.png
│   ├── sings.png
│   ├── sleeps.png
│   ├── runs.png
│   ├── waters.png
│   ├── cleans.png
│   ├── cooks.png
│   ├── drives.png
│   ├── dances.png
│   ├── rides.png
│   ├── watches.png
│   └── reads.png
├── objects/              # Icon untuk object (benda)
│   ├── floor.png        # ✅ Sudah diupload
│   ├── apple.png
│   ├── milk.png
│   ├── hands.png
│   ├── teeth.png
│   ├── ball.png
│   ├── balloon.png
│   ├── house.png
│   ├── song.png
│   ├── yarn.png
│   ├── chair.png
│   ├── bone.png
│   ├── park.png
│   ├── flowers.png
│   ├── desk.png
│   ├── rice.png
│   ├── car.png
│   ├── bicycle.png
│   ├── movie.png
│   └── newspaper.png
└── README.md             # Panduan ini
```

## ✅ Icon yang Sudah Diintegrasikan:

### **floor.png** ✅
- **Path:** `/assets/upload/icons/objects/floor.png`
- **Type:** Object
- **Used in:** Level 17 (Grandpa dances on the floor)
- **Fallback:** 🏠 emoji

## 📋 Cara Upload Icon Baru:

### **1. Siapkan Icon:**
- **Format:** PNG atau JPG
- **Ukuran:** 200x200px untuk konsistensi
- **Background:** Transparan atau solid color
- **Style:** Konsisten dengan tema game

### **2. Upload ke Folder yang Tepat:**
- **Person icons** → `persons/` folder
- **Action icons** → `actions/` folder  
- **Object icons** → `objects/` folder

### **3. Beri Nama File yang Sesuai:**
- Gunakan nama yang sama dengan ID di data level
- Contoh: `boy.png`, `eats.png`, `apple.png`

### **4. Update Data Level:**
Setelah upload, saya akan update path di `src/data/levels.ts`:
```javascript
{ id: 'floor', type: 'object', label: 'Floor', image: '/assets/upload/icons/objects/floor.png', emoji: '🏠' }
```

## 🎮 Cara Test Icon:

### **1. Test Icon Floor:**
1. Refresh browser di http://localhost:3000
2. Aktifkan review mode (tombol 📖)
3. Navigasi ke Level 17 (Grandpa dances on the floor)
4. Lihat kartu "Floor" menggunakan icon custom Anda

### **2. Test Fallback:**
- Jika icon tidak ditemukan, akan fallback ke emoji 🏠
- Pastikan path file sudah benar

## 🔧 Technical Details:

### **Image Loading:**
- **Priority:** Custom icon → Emoji fallback
- **Format:** PNG/JPG dengan transparansi
- **Size:** Auto-resize oleh CSS
- **Performance:** Lazy loading

### **Path Structure:**
- **Base path:** `/assets/upload/icons/`
- **Category:** `persons/`, `actions/`, `objects/`
- **File:** `[name].png`

## 📝 Next Steps:

### **Icon yang Bisa Diupload Selanjutnya:**
1. **drinks** - Gelas dengan air
2. **hands** - Lima jari tangan
3. **aunty** - Kepala young female
4. **desk** - Meja atau komputer

### **Upload Process:**
1. Upload icon ke folder yang sesuai
2. Beri tahu saya nama file yang diupload
3. Saya akan update data level untuk menggunakan icon baru
4. Test di game untuk memastikan icon tampil dengan benar

## 🚀 Benefits:

- **Custom Design** - Icon sesuai dengan kebutuhan
- **Consistent Style** - Semua icon dalam tema yang sama
- **Better UX** - Visual yang lebih menarik untuk anak-anak
- **Easy Management** - Folder terorganisir per kategori

**Icon floor sudah berhasil diintegrasikan!** Silakan upload icon lainnya sesuai kebutuhan.
