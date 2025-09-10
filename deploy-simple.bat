@echo off
echo ========================================
echo    DEPLOY TO VERCEL - SIMPLE VERSION
echo ========================================
echo.

REM Set PATH to include Node.js
set PATH=%PATH%;C:\Program Files\nodejs

echo Step 1: Installing Vercel CLI...
call "C:\Program Files\nodejs\npm.cmd" install -g vercel

echo.
echo Step 2: Building project...
call "C:\Program Files\nodejs\npm.cmd" run build

echo.
echo Step 3: Deploying to Vercel...
echo Please follow the prompts:
echo - Login to Vercel (if needed)
echo - Choose project settings
echo - Wait for deployment
echo.
call "C:\Program Files\nodejs\npm.cmd" exec vercel --prod

echo.
echo ========================================
echo   DEPLOYMENT COMPLETED!
echo ========================================
echo Check your Vercel dashboard for the live URL
echo Your game will be available at: https://your-app-name.vercel.app
echo ========================================
pause
