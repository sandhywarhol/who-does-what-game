@echo off
echo ========================================
echo    WHO DOES WHAT GAME - MOBILE TEST
echo ========================================
echo.

echo Server Status:
netstat -an | findstr :3001
if %errorlevel% equ 0 (
    echo ✅ Port 3001: ACTIVE - Game Ready!
) else (
    echo ❌ Port 3001: INACTIVE - Starting server...
    start "Game Server" cmd /k "npm run dev"
    timeout /t 3 /nobreak >nul
)

echo.
echo ========================================
echo   MOBILE TEST INSTRUCTIONS
echo ========================================
echo.
echo 1. Buka browser dan ke: http://localhost:3001
echo 2. Tekan F12 untuk Developer Tools
echo 3. Click icon mobile (📱) di toolbar
echo 4. Pilih device: iPhone SE atau Samsung Galaxy
echo 5. Test drag & drop dengan touch
echo.
echo ========================================
echo   TROUBLESHOOTING
echo ========================================
echo.
echo Jika masih error 404:
echo 1. Clear browser cache (Ctrl+Shift+Delete)
echo 2. Try incognito mode (Ctrl+Shift+N)
echo 3. Disable browser extensions
echo 4. Try different browser
echo 5. Restart browser completely
echo.
echo Jika port 3001 tidak bisa diakses:
echo 1. Check firewall settings
echo 2. Check antivirus blocking localhost
echo 3. Try port 3000 instead
echo.
echo ========================================
echo   GAME FEATURES
echo ========================================
echo.
echo ✅ Mobile-responsive design
echo ✅ Touch-friendly drag & drop
echo ✅ Optimized for small screens
echo ✅ Fast loading (128 kB)
echo ✅ Audio feedback with fallback
echo.
echo Press any key to open game in browser...
pause >nul

echo Opening game in browser...
start http://localhost:3001

echo.
echo Game opened! If it doesn't load, try the troubleshooting steps above.
echo.
pause
