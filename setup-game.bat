@echo off
title Who Does What - Game Setup
color 0A

echo.
echo ========================================
echo    WHO DOES WHAT - GAME SETUP
echo ========================================
echo.

echo Checking Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo ❌ Node.js belum terinstall!
    echo.
    echo 📥 Download Node.js dari: https://nodejs.org/
    echo 📦 Install dengan default settings
    echo 🔄 Restart script ini setelah install
    echo.
    echo Tekan Enter untuk membuka website...
    pause >nul
    start https://nodejs.org/
    exit /b 1
)

echo ✅ Node.js sudah terinstall!
echo.

echo 📦 Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo.
    echo ❌ Gagal install dependencies!
    echo 🌐 Cek koneksi internet dan coba lagi
    pause
    exit /b 1
)

echo.
echo ✅ Dependencies berhasil diinstall!
echo.

echo 🚀 Starting game server...
echo.
echo 🎮 Game akan tersedia di: http://localhost:3000
echo 📱 Untuk mobile: http://[IP-KOMPUTER]:3000
echo 🛑 Tekan Ctrl+C untuk stop server
echo.

npm run dev
