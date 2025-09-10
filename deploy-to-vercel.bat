@echo off
echo ========================================
echo    DEPLOY TO VERCEL - WHO DOES WHAT
echo ========================================
echo.

REM Set PATH to include Node.js
set PATH=%PATH%;C:\Program Files\nodejs

REM Check if Node.js is available
echo Checking Node.js...
node --version
if %errorlevel% neq 0 (
    echo ERROR: Node.js not found!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if npm is available
echo Checking npm...
npm --version
if %errorlevel% neq 0 (
    echo ERROR: npm not found!
    pause
    exit /b 1
)

echo.
echo Installing Vercel CLI...
npm install -g vercel

echo.
echo Installing dependencies...
npm install

echo.
echo Building project for production...
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
echo Follow the prompts to deploy your app:
echo 1. Login to Vercel (if not already logged in)
echo 2. Choose your project settings
echo 3. Wait for deployment to complete
echo.
echo Your app will be available at: https://your-app-name.vercel.app
echo ========================================
echo.

vercel --prod

echo.
echo Deployment completed!
echo Check your Vercel dashboard for the live URL.
pause
