@echo off
echo ========================================
echo    DEPLOY TO VERCEL - READY TO GO!
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

echo Checking Vercel CLI...
vercel --version
if %errorlevel% neq 0 (
    echo ERROR: Vercel CLI not found!
    echo Installing Vercel CLI...
    npm install -g vercel
)

echo.
echo Building project...
npm run build
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
echo Follow the prompts:
echo 1. Login to Vercel (if not already logged in)
echo 2. Choose project settings
echo 3. Wait for deployment
echo.
echo Your app will be available at: https://your-app-name.vercel.app
echo ========================================
echo.

vercel --prod

echo.
echo ========================================
echo   DEPLOYMENT COMPLETED!
echo ========================================
echo Check your Vercel dashboard for the live URL
echo ========================================
pause
