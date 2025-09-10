@echo off
echo ========================================
echo    COMPLETE DEPLOYMENT - READY TO GO!
echo ========================================
echo.

REM Set PATH to include Node.js and Git
set PATH=%PATH%;C:\Program Files\nodejs;C:\Program Files\Git\bin

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

echo Checking Git...
git --version
if %errorlevel% neq 0 (
    echo ERROR: Git not found!
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
echo ========================================
echo   STEP 1: PREPARING FOR GITHUB
echo ========================================
echo.

REM Initialize Git repository
if not exist ".git" (
    echo Initializing Git repository...
    git init
)

REM Add all files
echo Adding files to Git...
git add .

REM Check if there are changes to commit
git diff --cached --quiet
if %errorlevel% equ 0 (
    echo No changes to commit.
) else (
    echo Committing changes...
    git commit -m "Initial commit: Who Does What Game - Educational game for kids"
)

echo.
echo ========================================
echo   STEP 2: BUILDING PROJECT
echo ========================================
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
echo   STEP 3: DEPLOY TO VERCEL
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
echo.
echo Next steps for GitHub:
echo 1. Go to https://github.com and create a new repository
echo 2. Copy the repository URL
echo 3. Run these commands:
echo.
echo    git remote add origin YOUR_REPOSITORY_URL
echo    git branch -M main
echo    git push -u origin main
echo.
echo Check your Vercel dashboard for the live URL
echo ========================================
pause
