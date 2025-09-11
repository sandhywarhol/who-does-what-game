@echo off
echo ========================================
echo    WHO DOES WHAT GAME - TEST LINKS
echo ========================================
echo.

echo Server Status:
netstat -an | findstr :3000
if %errorlevel% equ 0 (
    echo ✅ Port 3000: ACTIVE
) else (
    echo ❌ Port 3000: INACTIVE
)

netstat -an | findstr :3001
if %errorlevel% equ 0 (
    echo ✅ Port 3001: ACTIVE
) else (
    echo ❌ Port 3001: INACTIVE
)

echo.
echo ========================================
echo   TEST LINKS FOR MOBILE VIEW
echo ========================================
echo.
echo Try these URLs in your browser:
echo.
echo 1. http://localhost:3000
echo 2. http://localhost:3001
echo.
echo ========================================
echo   TROUBLESHOOTING STEPS
echo ========================================
echo.
echo If game doesn't load:
echo 1. Clear browser cache (Ctrl+Shift+Delete)
echo 2. Try incognito/private mode
echo 3. Disable browser extensions
echo 4. Try different browser (Chrome, Firefox, Edge)
echo 5. Check if antivirus is blocking localhost
echo.
echo For mobile simulation:
echo 1. Press F12 in browser
echo 2. Click mobile icon (📱)
echo 3. Select iPhone SE or Samsung Galaxy
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
pause
