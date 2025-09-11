@echo off
echo ========================================
echo    DEPLOY TO VERCEL - MOBILE READY
echo ========================================
echo.

REM Set PATH to include Node.js
set PATH=%PATH%;C:\Program Files\nodejs

echo Checking Node.js...
node --version
if %errorlevel% neq 0 (
    echo ERROR: Node.js not found!
    pause
    exit /b 1
)

echo Checking npm...
npm --version
if %errorlevel% neq 0 (
    echo ERROR: npm not found!
    pause
    exit /b 1
)

echo.
echo Building project...
call "C:\Program Files\nodejs\npm.cmd" run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)

echo.
echo ========================================
echo   DEPLOYING TO VERCEL...
echo ========================================
echo.
echo Since PowerShell execution policy blocks npx, please use Vercel Dashboard:
echo.
echo 1. Open https://vercel.com/dashboard
echo 2. Click "New Project"
echo 3. Import from GitHub: sandhywarhol/who-does-what-game
echo 4. Deploy!
echo.
echo Your mobile-optimized game will be live at:
echo https://your-app-name.vercel.app
echo ========================================
echo.
echo Build completed successfully!
echo Ready for Vercel deployment.
pause
