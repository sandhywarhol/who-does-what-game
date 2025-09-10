@echo off
echo ========================================
echo    UPLOAD TO GITHUB - STEP BY STEP
echo ========================================
echo.

REM Set PATH to include Git
set PATH=%PATH%;C:\Program Files\Git\bin

echo Checking Git...
git --version
if %errorlevel% neq 0 (
    echo ERROR: Git not found!
    pause
    exit /b 1
)

echo.
echo ========================================
echo   STEP 1: CREATE REPOSITORY ON GITHUB
echo ========================================
echo.
echo 1. Open https://github.com in your browser
echo 2. Login to your GitHub account
echo 3. Click "+" button in top right corner
echo 4. Select "New repository"
echo 5. Fill the form:
echo    - Repository name: who-does-what-game
echo    - Description: Educational game for kids
echo    - Public: YES
echo    - DON'T check "Add a README file"
echo    - DON'T check "Add .gitignore"
echo 6. Click "Create repository"
echo.
echo After creating, GitHub will show you a URL like:
echo https://github.com/USERNAME/who-does-what-game.git
echo.
echo COPY THIS URL!
echo.
pause

echo.
echo ========================================
echo   STEP 2: ENTER YOUR GITHUB URL
echo ========================================
echo.
set /p GITHUB_URL="Enter your GitHub repository URL: "

if "%GITHUB_URL%"=="" (
    echo ERROR: No URL provided!
    pause
    exit /b 1
)

echo.
echo ========================================
echo   STEP 3: UPLOADING TO GITHUB
echo ========================================
echo.

echo Adding remote origin...
git remote add origin %GITHUB_URL%
if %errorlevel% neq 0 (
    echo WARNING: Remote already exists, updating...
    git remote set-url origin %GITHUB_URL%
)

echo Renaming branch to main...
git branch -M main

echo Pushing to GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo   SUCCESS! UPLOADED TO GITHUB
    echo ========================================
    echo.
    echo Your repository is now available at:
    echo %GITHUB_URL%
    echo.
    echo Next steps:
    echo 1. Go to https://vercel.com/dashboard
    echo 2. Click "New Project"
    echo 3. Import from GitHub
    echo 4. Select "who-does-what-game"
    echo 5. Deploy!
    echo.
) else (
    echo.
    echo ========================================
    echo   ERROR: UPLOAD FAILED
    echo ========================================
    echo.
    echo Please check:
    echo 1. GitHub URL is correct
    echo 2. You have access to the repository
    echo 3. Internet connection is stable
    echo.
)

pause
